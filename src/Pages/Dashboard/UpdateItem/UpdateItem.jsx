import { useLoaderData } from "react-router-dom"; 
import { useForm } from "react-hook-form" 
import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const image_hosting_key= import.meta.env.VITE_IMAGE_HOSTING_API; 
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`



const UpdateItem = () => {
const {name, category, price, image, recipe, _id} = useLoaderData(); 
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


    const { formState: { errors }, register, handleSubmit } = useForm()
    const onSubmit = async (data) => { 
        const imageFile = {image: data.image[0]} 
        if(imageFile.image){
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: { 
                 'content-type' : 'multipart/form-data' 
             } 
             })
             if(res.data.success){
                 // now send data to the data base
                 const menuItem = {
                     name: data.name,
                     category: data.category,
                     price: parseInt(data.price),
                     recipe: data.recipe,
                     image: res.data.data.display_url
                 }
                 console.log(menuItem)
     
     
                 const updateRes = await axiosSecure.patch(`/menu/${_id}`, menuItem) 
                 console.log(updateRes.data)
                 if(updateRes.data.modifiedCount > 0){
                     Swal.fire({
                         position: "top-end",
                         icon: "success",
                         title: `${data.name} is updated!`,
                         showConfirmButton: false,
                         timer: 1500
                       }); 
                 }
             } 
        }
        else{
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseInt(data.price),
                recipe: data.recipe,
                image: image
            }

            const updateRes = await axiosSecure.patch(`/menu/${_id}`, menuItem) 
            console.log(updateRes.data)
            if(updateRes.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated!`,
                    showConfirmButton: false,
                    timer: 1500
                  }); 
            }

        }
    }

    return (
        <div>
            <SectionTitle
            heading={'UPDATE ITEM'}
            subHeading={'---update now---'}
            ></SectionTitle>
            

            <form onSubmit={handleSubmit(onSubmit)} className="bg-[#F3F3F3] p-10 m-5 rounded-lg"> 
                <div className="form-control w-full mb-6">
                    <label className="label">
                        <span className="label-text">Recipe Name*</span>
                    </label>
                    <input
                    defaultValue={name}
                     type="text"
                      placeholder="Recipe Name"
                       className="input input-bordered w-full "
                       {...register("name", {required: true})} />
                       {errors.name && <span>This field is required</span>}
                </div>
                <div className="flex gap-16">
                    {/* category */}
                    <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text">Category*</span>
                    </label>
                    <select defaultValue={category} {...register("category", {required: true})} className="select select-bordered select-md w-full ">
                    <option disabled value='default'>Select a category</option>
                    <option value="salad">Salad</option>
                    <option value="pizza">Pizza</option>
                    <option value="soup">Soup</option>
                    <option value="dessert">Dessert</option>
                    <option value="drinks">Drinks</option>
                </select>
                </div>

                    {/* price */}

                    <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Price*</span>
                    </label>
                    <input
                    defaultValue={price}
                     type="number"
                      placeholder="Price"
                       className="input input-bordered w-full "
                       {...register("price", {required: true})} />
                </div>
                </div>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea defaultValue={recipe} {...register("recipe", {required: true})} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                </div>

                <div>
                <label className="label">
                        <span className="label-text">Photo*</span>
                    </label>
                    <img src={image} className="w-48 h-36 rounded-lg" alt="" />
                <input  {...register('image')} type="file" className="file-input w-full max-w-xs" />
                </div>
                <div className="flex justify-center items-center"> 
                <button className="btn text-lg text-white bg-gradient-to-r from-[#835D23] to-[#B58130] mt-5">
                    Update Item 
                </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateItem;