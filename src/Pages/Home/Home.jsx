import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import ChefService from "./ChefService";
import FeaturedItem from "./FeaturedItem";
import PopularMenu from "./PopularMenu";
import Recommend from "./Recommend";
import Testimonial from "./Testimonial";



const Home = () => {

    


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className=" max-w-6xl mx-auto">
                <Category></Category>
                <ChefService></ChefService>
                <PopularMenu></PopularMenu>
                <Recommend></Recommend>
            </div>
            <FeaturedItem></FeaturedItem>
            <div className=" max-w-6xl mx-auto">
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;