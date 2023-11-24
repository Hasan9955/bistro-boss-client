import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import moment from 'moment';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";



const CheckoutForm = () => {

    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const date = moment().format('MMMM Do YYYY'); 
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();



    // source:(https://stripe.com/docs/payments/quickstart)
    // path: stripeDocs/payment/quickStart
    // ----------Get payment security key from server side-------------
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])


    // source(https://github.com/stripe/react-stripe-js/blob/master/examples/hooks/0-Card-Minimal.js)
    // path: stripe react npm/ github/react-stripe-js/examples/hooks/o-card-minimal.js
    // --------form submission------------
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (!card) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })



        if (error) {
            console.error('payment error', error)
            setError(error.message)
        } else {
            console.log('payment method', paymentMethod)
            setError('')
        }



        

        // source:(https://stripe.com/docs/js/payment_intents/confirm_card_payment)
        // ----------confirm payment-------------

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'anonymous'
                }
            },

        })


        if(confirmError){
            console.log('the confirm error', confirmError)
            setTransactionId('')
            setError(confirmError.message)
        }
        else{
            console.log('payment intent', paymentIntent)
            if(paymentIntent.status === "succeeded"){
                setTransactionId(paymentIntent.id)
            }

            // now save the payment in the data base

            const paymentDetails = {
                email: user.email,
                price: totalPrice,
                transactionId: paymentIntent.id,
                date: date,
                cartIds: cart.map(item => item._id),
                status: 'pending'
            }
            console.log(paymentDetails)

           const res = await  axiosSecure.post('/payments', paymentDetails)
           console.log('payment send ' , res.data)
           if(res.data.deleteResult.deletedCount > 0 ){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your payment received successfully!!!",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/dashboard/paymentHistory')
           }
           

        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-primary my-6" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            {
                error && <p className="text-red-600">{error}</p>
            }
            {
                transactionId && <p>Your Transaction Id: <span className="text-green-600">{transactionId}</span></p>
            }
        </form >
    );
};

export default CheckoutForm;