import SectionTitle from "../../Components/SectionTitle";
import MenuItems from "../Shared/MenuItems/MenuItems";
import useMenu from "../../Hooks/UseMenu";



const PopularMenu = () => {

    const [menu] = useMenu()
    const popular = menu.filter(men => men.category === 'popular')


    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('/public/menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(items => items.category === 'popular')
    //         setMenu(popularItems)
    //     })
    // },[])



    return (
        <div className="mb-20 flex flex-col justify-center items-center">
            <SectionTitle
            subHeading={'---Check it out---'}
            heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="grid gap-5 md:grid-cols-2">
            {
                popular.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
            }
            </div>
            <button className="bg-gray-200 btn btn-outline border-0 border-b-2 rounded-xl p-3 border-black uppercase text-black mt-5 shadow-xl">View Full  Menu</button>

            <div className="bg-black p-10 w-full mt-20" style={{fontFamily: 'Raleway'}}>
                <p className="text-white font-bold text-4xl text-center">Call Us: +88 0192345678910</p>
            </div>
        </div>
    );
};

export default PopularMenu;