



const FoodCard = ({ menu }) => {

    return (

        <div className='grid grid-cols-3 gap-5'>
            {
                menu.map(item => <div key={item._id} className="card bg-base-200 ">
                    <div>
                        <figure>
                            <img src={item.image} alt="Food" className="rounded-lg" />
                        </figure>
                        <p className="bg-slate-900 text-white absolute right-4 rounded p-2 px-3 top-4">${item.price}</p>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{item.name}</h2>
                        <p>{item.recipe.length > 20 ? item.recipe.slice(0, 34) : item.recipe}</p>
                        <div className="card-actions">
                            <button className="bg-gray-200 btn border-b-2 border-[#BB8506] text-[#BB8506] border-0 hover:bg-[#1F2937] hover:border:[#1F2937] uppercase">add to cart</button>
                        </div>
                    </div>
                </div>)
            }
        </div>

    );
};

export default FoodCard;