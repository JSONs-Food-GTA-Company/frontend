import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
}

export const RestaurantMenu: React.FC<{}> = (props) => {
    // let { id } = useParams();
    const [restaurant, setRestaurant] = useState<RestaurantMenuData>({
        address: "QR 204 Conjunto 1",
        description: "Restaurante melhor de todos",
        id: 16,
        logo_url: "www.google.com.br",
        name: "Souzas Restaurant",
        owner: "Dev de Pedreiro",
        products: [
            {
                id: 1,
                name: "Pepsi",
                description: "Refrigerante 2L",
                image_url: "www.google.com.br",
                price: 6.5,
            },
            {
                id: 2,
                name: "Pastel",
                description: "Pastel com delicioso frango",
                image_url: "www.google.com.br",
                price: 8,
            },
            {
                id: 3,
                name: "Coxinha",
                description: "Deliciosa coxinha",
                image_url: "www.google.com.br",
                price: 4,
            },
            {
                id: 4,
                name: "Coxinha",
                description: "Deliciosa coxinha",
                image_url: "www.google.com.br",
                price: 4,
            },
            {
                id: 5,
                name: "Camarão Internacional",
                description: "Delicioso camarão",
                image_url: "www.google.com.br",
                price: 80,
            }
        ]
    });

    /* useEffect(() => {
        getAllRestaurants()
    }, [])

    function getAllRestaurants(){
        api.get(`restaurant/${id}`).then((response) => {
            setRestaurant(response.data)
        })
    } */

    return (
        
        <div className='restaurantMenu'>
            {console.log('restaurant ', restaurant)}
            <div className='restaurantMenu--titleArea'>
                <div className='restaurantMenu--image'>
                    <img src="https://i.ibb.co/MRvHqwT/Logo-Pizzaria-Dom-Ant-nio-Italian-Food.png" alt="logoRestaurant" />
                </div>
                <div className='restaurantMenu--info'>
                    <div className='restaurantMenu--title'>
                        <p>{restaurant?.name}</p>
                    </div>
                    <div className='restaurantMenu--subtitle'>
                        <p>{restaurant?.description}</p>
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
                    </div>
                )}
            </div>

        </div>
    )}