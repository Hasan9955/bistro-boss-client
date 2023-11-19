


const MenuItems = ({item}) => {


    
    const {image, name, price, recipe} = item;


    return (
        <div className="flex space-x-4 px-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[70px]" src={image} alt="" />
            <div>
                <h3 className="uppercase text-lg">{name}-------------</h3>
                <h4>{recipe}</h4>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItems;