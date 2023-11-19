import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../Hooks/UseMenu";
import { Link } from "react-router-dom";



const MenuCategory = ({category }) => {


    const [menu] =useMenu()
    const items = menu.filter(item => item.category === category)

    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('/public/menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(items => items.category === category)
    //         setMenu(popularItems)
    //     })
    // },[category])




    return (
        <div className="my-20 flex flex-col justify-center items-center">
            
            <div className="grid gap-5 md:grid-cols-2">
            {
                items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
            }
            </div>
            <Link to={`/order/${category}`}>
            <button className="btn btn-outline border-0 border-b-2 rounded-xl p-3 border-black uppercase text-black mt-10 shadow-xl">ORDER YOUR FAVORITE FOOD</button>
            </Link>
        </div>
    );
};

export default MenuCategory;