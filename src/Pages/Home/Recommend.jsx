import SectionTitle from "../../Components/SectionTitle";
import {useEffect, useState} from 'react'



const Recommend = () => {

    const [items, setItems] =useState([])

    useEffect(() => {
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data => {
            const recommended = data.filter(items => items.category === 'popular')
            setItems(recommended)
        })
    },[])

    console.log(items)
    return (
        <div className="mb-20">
        <SectionTitle
        heading={'CHEF RECOMMENDS'}
        subHeading={'---Should Try---'}
        ></SectionTitle>
        <div className="grid grid-cols-4 gap-5">
            {
                items?.map(item => <div key={item._id} className="card bg-base-200 ">
                <figure className=" ">
                  <img src={item.image} alt="Shoes" className=" " />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{item.name}</h2>
                  <p>{item.recipe.length > 20 ? item.recipe.slice(0, 34) : item.recipe}</p>
                  <div className="card-actions">
                    <button className="btn border-b-2 border-[#BB8506] text-[#BB8506] border-0 hover:bg-[#1F2937] hover:border:[#1F2937] uppercase bg-gray-200">add to cart</button>
                  </div>
                </div>
              </div>)
            }
            </div>
        
    </div>
    );
};

export default Recommend;