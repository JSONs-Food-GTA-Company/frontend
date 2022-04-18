import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './restaurantList.css';
import api from '../../services/api';
import { Restaurant } from '../../shared/interface';

export const RestaurantList: React.FC<{}> = (props) => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>();

    useEffect(() => {
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
    }

    return (
        <div className='restaurantList'>
            <div className='restaurantList--title'>
                <p>Lista de restaurantes</p>
            </div>
            {restaurants?.map((restaurant) => 
                <div key={restaurant.id} className='restaurantList--card'>
                    <div className='restaurantList--image'>
                        <img src="https://i.ibb.co/MRvHqwT/Logo-Pizzaria-Dom-Ant-nio-Italian-Food.png" alt="RestaurantImage"></img>
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