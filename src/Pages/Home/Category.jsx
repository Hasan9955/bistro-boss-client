import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'


import { FreeMode, Pagination } from 'swiper/modules';
import SectionTitle from '../../Components/SectionTitle';



const Category = () => {
    return (
        <div className='pb-10'>
            <SectionTitle
            subHeading={"---From 11:00am to 10:00pm---"}
            heading={"ORDER ONLINE"}
            ></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-4xl text-white -mt-36 mb-10 w-48 mx-auto uppercase'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-4xl text-white -mt-36 mb-10 w-48 mx-auto uppercase'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-4xl text-white -mt-36 mb-10 w-48 mx-auto uppercase'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-4xl text-white -mt-36 mb-10 w-48 mx-auto uppercase'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-4xl text-white -mt-36 mb-10 w-48 mx-auto uppercase'>Soups</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;