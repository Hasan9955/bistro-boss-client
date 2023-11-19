import { Parallax } from 'react-parallax';



const Cover = ({ bgImg, title, subTitle }) => {
    return (
        <Parallax
            blur={{ min: -20, max: 20 }}
            bgImage={bgImg}
            bgImageAlt="the menu"
            strength={-20}
        >
            <div className="hero h-[500px]">
                <div className=" "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div style={{ fontFamily: "Cinzel" }} className=" text-white hero-overlay bg-opacity-60 px-32 py-10">
                        <h1 className="mb-5 text-5xl font-bold uppercase ">{title}</h1>
                        <p className=" max-w-xl">{subTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;