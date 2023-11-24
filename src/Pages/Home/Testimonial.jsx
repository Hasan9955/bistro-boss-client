import SectionTitle from "../../Components/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";


const Testimonial = () => {


    const [reviews, setReviews] = useState()
    useEffect(() => {
        fetch('https://bistro-boss-server-chi-three.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])



    return (
        <div className="my-20">
            <SectionTitle
                heading={'TESTIMONIALS'}
                subHeading={'---What Our Clients Say---'}
            ></SectionTitle>

            <div>

                <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">



                    {
                        reviews?.map(review => <SwiperSlide key={review._id}>
                            <div className="my-16 mx-24 flex flex-col justify-center items-center text-center gap-5">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft className="text-6xl"></FaQuoteLeft>
                                <p className="max-w-2xl mx-auto">{review.details}</p>
                                <h3 className="text-2xl text-[#CD9003]">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;