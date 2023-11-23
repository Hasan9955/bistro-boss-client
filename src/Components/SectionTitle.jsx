


const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-5/12 mx-auto text-center my-8">
            <h3 className="text-yellow-600 mb-2">{subHeading}</h3>
            <h1 className="text-4xl uppercase border-y-2 py-3">{heading}</h1>
        </div>
    );
};

export default SectionTitle;