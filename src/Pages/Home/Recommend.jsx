import Swal from "sweetalert2";
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../Hooks/UseMenu";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const Recommend = () => {

  const AxiosBase = useAxiosSecure();
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [menu] = useMenu()
  const [, refetch] = useCart();
  const popular = menu.filter(item => item.category === 'popular')

  const handleAddToCart = (food) => {
    if (user && user.email) {
            
      const cartItem = {menuId: food._id, email: user.email, category: food.category, menuName: food.name, price: food.price, image: food.image}
      AxiosBase.post('/carts', cartItem)
      .then(result => {
          if(result.data.insertedId){
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${food.name} added to you cart!`,
                  showConfirmButton: false,
                  timer: 1500
                });
                refetch();
          }
      })
  }
    else{
      Swal.fire({
        title: "You are not logged!",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now"
      }).then((result) => {
        if (result.isConfirmed) {
          // send user to login page
          navigate('/login', {state: location.pathname})
        }
      });
    }
  }

  return (
    <div className="mb-20">
      <SectionTitle
        heading={'CHEF RECOMMENDS'}
        subHeading={'---Should Try---'}
      ></SectionTitle>
      <div className="grid grid-cols-4 gap-5">
        {
          popular?.map(item => <div key={item._id} className="card bg-base-200 ">
            <figure className=" ">
              <img src={item.image} alt="Shoes" className=" " />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.recipe.length > 20 ? item.recipe.slice(0, 34) : item.recipe}</p>
              <div className="card-actions">
                <button onClick={() => handleAddToCart(item)} className="btn border-b-2 border-[#BB8506] text-[#BB8506] border-0 hover:bg-[#1F2937] hover:border:[#1F2937] uppercase bg-gray-200">add to cart</button>
              </div>
            </div>
          </div>)
        }
      </div>

    </div>
  );
};

export default Recommend;