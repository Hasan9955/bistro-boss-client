import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import img from '../../../assets/menu/banner3.jpg';
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../Components/SectionTitle";
import dessertImg from '../../../assets/home/chef-service.jpg'


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            <div className="mb-20">
                <Cover
                    bgImg={img}
                    title={'Our menu'}
                    subTitle={'Would you like to try a dish?'}
                ></Cover>
            </div>
            <SectionTitle
                heading={"TODAY'S OFFER"}
                subHeading={"---Don't miss---"}
            ></SectionTitle>
            <MenuCategory
                category={'offered'}
            ></MenuCategory>


            <Cover
                bgImg={dessertImg}
                title={'DESSERTS'}
                subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></Cover>
            <MenuCategory
                category={'dessert'}
            ></MenuCategory>



            <Cover
                bgImg={dessertImg}
                title={'PIZZA'}
                subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></Cover>
            <MenuCategory
                category={'pizza'}
            ></MenuCategory>




            <Cover
                bgImg={dessertImg}
                title={'SALADS'}
                subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></Cover>
            <MenuCategory
                category={'salad'}
            ></MenuCategory>



            <Cover
                bgImg={dessertImg}
                title={'SOUPS'}
                subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></Cover>
            <MenuCategory
                category={'soup'}
            ></MenuCategory>
        </div>
    );
};

export default Menu;