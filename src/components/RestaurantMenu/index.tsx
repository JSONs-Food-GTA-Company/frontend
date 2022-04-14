import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';
import './restaurantMenu.css';

interface RestaurantMenuData {
    id: number,
    name: string,
    address: string,
    description: string,
    logo_url: string,
    owner: string
    products: Product[]
}

interface Product {
    id: number,
    name: string,
    description: string,
    image_url: string,
    price: number,
    adds_item: Additional[]
}

interface Additional {
    id: number,
    item: string,
    price: number
}

export const RestaurantMenu: React.FC<{}> = (props) => {
    let { id } = useParams();
    const [restaurant, setRestaurant] = useState<RestaurantMenuData>();

    useEffect(() => {
        getAllRestaurants()
    }, [])

    function getAllRestaurants(){
        api.get(`restaurant/${id}`).then((response) => {
            setRestaurant(response.data)
        })
    }

    return (
        
        <div className='restaurantMenu'>
            <div className='restaurantMenu--titleArea'>
                <div className='restaurantMenu--image'>
                    <img src="https://i.ibb.co/MRvHqwT/Logo-Pizzaria-Dom-Ant-nio-Italian-Food.png" alt="logoRestaurant" />
                </div>
                <div className='restaurantMenu--info'>
                    <div className='restaurantMenu--title'>
                        <p>{restaurant?.name}</p>
                    </div>
                    <div className='restaurantMenu--subtitle'>
                        <p>{restaurant?.address}</p>
                    </div>
                </div>
            </div>

            <div className='restaurantMenu--foodArea'>
                {restaurant?.products.map((menu) => 
                    <div key={menu.id} className='restaurantMenu--card'>
                        <div className='restaurantMenu--image'>
                            <img src="http://luciliadiniz.com/wp-content/uploads/2019/05/Polenta-com-molho-de-funghi-na-mesa.jpg" alt="foodImage" />
                        </div>
                        <div className='restaurantList--info'>
                            <div className='restaurantList--infoTitle'>
                                <p>{menu.name}</p>
                            </div>
                            <div className='restaurantList--infoDescription'>
                                <p>{menu.description}</p>
                            </div>
                        </div>
                        <div className='restaurantList--infoDescription'>
                            {menu.adds_item.map((additional) =>
                                <div key={additional.id}>
                                    <p>{additional.item}</p>
                                    <p>{additional.price}</p>
                                </div> 
                            )}
                            <Link 
                                to={{ pathname: `/createadditional/${menu.id}`,}}
                            >
                                <p>Cadastrar adicional</p>
                            </Link>    
                        </div>
                    </div>
                )}
            </div>

            <div className='restaurantMenu--addProduct'>
                <Link 
                    to={{ pathname: `/createproducts/${id}`,}}
                >
                    <p>Cadastrar produto</p>
                </Link>           
            </div>

        </div>
    )}