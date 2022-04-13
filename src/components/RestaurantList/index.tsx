import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './restaurantList.css';
import api from '../../services/api';

export interface Restaurant {
    id: number,
    name: string,
    address: string,
    description: string,
    logo_url: string,
    owner: string
}

export const RestaurantList: React.FC<{}> = (props) => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([
        {
            id: 12,
            name: "Abas Restaurant",
            address: "QR 204 Conjunto 1",
            description: "Restaurante melhor de todos",
            logo_url: "www.google.com.br",
            owner: "Dev de Pedreiro"
        },
        {
            id: 15,
            name: "Gabriels Restaurant",
            address: "QR 204 Conjunto 1",
            description: "Restaurante melhor de todos",
            logo_url: "www.google.com.br",
            owner: "Dev de Pedreiro"
        },
        {
            id: 1,
            name: "Restaurant 1",
            address: "QR 204 Conjunto 1",
            description: "Restaurante melhor de todos",
            logo_url: "www.google.com.br",
            owner: "Dev de Pedreiro"
        },
        {
            id: 11,
            name: "Restaurant 2",
            address: "QR 204 Conjunto 1",
            description: "Restaurante melhor de todos",
            logo_url: "www.google.com.br",
            owner: "Dev de Pedreiro"
        },
        {
            id: 24,
            name: "Ricardo",
            address: "QR 204 Conjunto 1",
            description: "Restaurante melhor de todos",
            logo_url: "www.google.com.br",
            owner: "Dev de Pedreiro"
        },
        {
            id: 25,
            name: "Ricardos Bar",
            address: "Pernambuco",
            description: "Restaurante melhor de todos",
            logo_url: "www.google.com.br/logo_url",
            owner: "Ricardo"
        },
        {
            id: 16,
            name: "Souzas Restaurant",
            address: "QR 204 Conjunto 1",
            description: "Restaurante melhor de todos",
            logo_url: "www.google.com.br",
            owner: "Dev de Pedreiro"
        },
        {
            id: 19,
            name: "Will",
            address: "QR 204 Conjunto 1",
            description: "Restaurante melhor de todos",
            logo_url: "",
            owner: "Dev de Pedreiro"
        },
        {
            id: 18,
            name: "Will Restaurant",
            address: "QR 204 Conjunto 1",
            description: "Restaurante melhor de todos",
            logo_url: "www.google.com.br",
            owner: "Dev de Pedreiro"
        }
    ]);

    /* useEffect(() => {
        getAllRestaurants()
    }, [])

    function getAllRestaurants(){
        api.get('restaurant', {
            headers: {
                'Content-Type': 'application/json'
             } 
        }).then((response) => {
            setRestaurants(response.data)
        })
    } */

    return (
        <div className='restaurantList'>
            <div className='restaurantList--title'>
                <p>Lista de restaurantes</p>
            </div>
            {restaurants?.map((restaurant) => 
                <div key={restaurant.id} className='restaurantList--card'>
                    <div className='restaurantList--image'>
                        <img src="https://i.ibb.co/MRvHqwT/Logo-Pizzaria-Dom-Ant-nio-Italian-Food.png" alt="mascot" />
                    </div>
                    <div className='restaurantList--info'>
                        <div className='restaurantList--infoTitle'>
                            <p>{restaurant.name}</p>
                        </div>
                        <div className='restaurantList--infoDescription'>
                            <p>{restaurant.description}</p>
                        </div>
                            <Link 
                                to={{
                                    pathname: `/restaurantmenu/${restaurant.id}`, 
                                }}
                                className='restaurantList--infoBottom'
                            >
                                <p>ver cardápio</p>
                            </Link>
                    </div>
                </div>
            )}
        </div>
    )}