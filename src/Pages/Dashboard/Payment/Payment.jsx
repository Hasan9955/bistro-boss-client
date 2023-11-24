import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle";
import {  Elements  } from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckoutForm";


// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_key);
const Payment = () => {
    return (
        <div>
            <SectionTitle
            heading="Make Payment"
            subHeading="---Please pay now"
            ></SectionTitle>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;