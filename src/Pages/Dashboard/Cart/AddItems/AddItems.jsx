import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../../Components/SectionTitle";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../../Hooks/useAxiosPublic"; 
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key= import.meta.env.VITE_IMAGE_HOSTING_API; 
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


    const { formState: { errors }, register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => { 
        const imageFile = {image: data.image[0]} 
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


            const menuRes = await axiosSecure.post('/menu', menuItem) 
            if(menuRes.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  reset()
            }
        } 
    }


    return (
        <div>
            <SectionTitle
                heading={"ADD AN ITEM"}
                subHeading={"---What's new?---"}
            ></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-[#F3F3F3] p-10 m-5 rounded-lg"> 
                <div className="form-control w-full mb-6">
                    <label className="label">
                        <span className="label-text">Recipe Name*</span>
                    </label>
                    <input
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
                    <select defaultValue='default' {...register("category", {required: true})} className="select select-bordered select-md w-full ">
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
                    <textarea {...register("recipe", {required: true})} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                </div>

                <div>
                <input {...register('image', {required: true})} type="file" className="file-input w-full max-w-xs" />
                </div>
                <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] mt-5">
                    Add Item <FaUtensils className="ml-4 text-lg"></FaUtensils>
                </button>
            </form>
        </div>
    );
};

export default AddItems;