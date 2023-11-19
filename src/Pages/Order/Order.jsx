import { useState } from 'react';
import { useParams } from 'react-router-dom';
import orderImg from '../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/UseMenu';
import FoodCard from './FoodCard';
import { Helmet } from 'react-helmet-async';


const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()

    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover
                bgImg={orderImg}
                title={'order Food'}
                subTitle={'Would you like to try a dish?'}
            ></Cover>


            <div className='max-w-5xl mx-auto my-10'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className='max-w-[375px] mx-auto my-10'>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <FoodCard menu={salad}></FoodCard>
                    </TabPanel>
                    <TabPanel>
                        <FoodCard menu={pizza}></FoodCard>
                    </TabPanel>
                    <TabPanel>
                        <FoodCard menu={soup}></FoodCard>
                    </TabPanel>
                    <TabPanel>
                        <FoodCard menu={dessert}></FoodCard>
                    </TabPanel>
                    <TabPanel>
                        <FoodCard menu={drinks}></FoodCard>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default Order;