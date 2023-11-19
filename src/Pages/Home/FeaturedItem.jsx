import SectionTitle from "../../Components/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg'



const FeaturedItem = () => {
    return (
        <div className="mb-20">
            <div className="hero h-[600px] bg-fixed" style={{ backgroundImage: `url(${featuredImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" text-white ">
                        <SectionTitle
                            heading={'Featured Item'}
                            subHeading={'---Check it out---'}
                        ></SectionTitle>
                        
                        <div className="flex gap-5 justify-center items-center ">
                            <img className="md:w-4/12" src={featuredImg} alt="" />
                            <div className="max-w-md text-start text-white ml-4">
                                <p>March 20, 2023</p>
                                <p>WHERE CAN I GET SOME?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                                <button className="uppercase btn btn-outline text-white border-b-2 rounded-xl border-0 w-36 mt-2">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;