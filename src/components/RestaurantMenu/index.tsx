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
    restaurant_id: number,
    adds_item: Additional[]
}

interface Additional {
    id: number,
    item: string,
    price: number,
    quantity: number,
    product_id: number,
}

export const RestaurantMenu: React.FC<{}> = (props) => {
    let { id } = useParams();
    const [restaurant, setRestaurant] = useState<RestaurantMenuData>(
        {
            id: 16,
            name: "Souzas Restaurant",
            address: "QR 204 Conjunto 1",
            description: "Restaurante melhor de todos",
            logo_url: "www.google.com.br",
            owner: "Dev de Pedreiro",
            products: [
                {
                    id: 2,
                    name: "Pastel",
                    description: "Pastel com delicioso frango",
                    image_url: "www.google.com.br",
                    price: 8,
                    restaurant_id: 16,
                    adds_item: [
                        {
                            id: 1,
                            item: "bacon",
                            quantity: 1,
                            price: 8.9,
                            product_id: 2
                        }
                    ]
                },
                {
                    id: 5,
                    name: "Camarão Internacional",
                    description: "Delicioso camarão",
                    image_url: "www.google.com.br",
                    price: 80,
                    restaurant_id: 16,
                    adds_item: []
                },
                {
                    id: 4,
                    name: "Coxinha",
                    description: "Deliciosa coxinha",
                    image_url: "www.google.com.br",
                    price: 4,
                    restaurant_id: 16,
                    adds_item: []
                },
                {
                    id: 1,
                    name: "Pepsi",
                    description: "Refrigerante 2L",
                    image_url: "www.google.com.br",
                    price: 6.5,
                    restaurant_id: 16,
                    adds_item: []
                },
                {
                    id: 3,
                    name: "Coxinha",
                    description: "Deliciosa coxinha",
                    image_url: "www.google.com.br",
                    price: 4,
                    restaurant_id: 16,
                    adds_item: []
                }
            ]
        }
    );

    // useEffect(() => {
    //     getAllRestaurants()
    // }, [])

    // function getAllRestaurants(){
    //     api.get(`restaurant/${id}`).then((response) => {
    //         setRestaurant(response.data)
    //     })
    // }

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
                        <p>Endereço: {restaurant?.address}</p>
                    </div>
                    <div className='restaurantMenu--subtitle'>
                        <p>Dono: {restaurant?.owner}</p>
                    </div>
                </div>
            </div>

            <div className='restaurantMenu--foodArea'>
                {restaurant?.products.map((menu) => 
                    <div key={menu.id} className='restaurantMenu--card'>
                        <div className='restaurantMenu--imageFood'>
                            <img src="http://luciliadiniz.com/wp-content/uploads/2019/05/Polenta-com-molho-de-funghi-na-mesa.jpg" alt="foodImage" />
                        </div>

                        <div className='restaurantMenu--infoContentArea'>

                            <div className='restaurantMenu--infoFood'>
                                <div className='restaurantMenu--infoTitle'>
                                    <p>{menu.name}</p>
                                </div>
                                <div className='restaurantMenu--infoDescription'>
                                    <p>{menu.description}</p>
                                </div>
                                <div className='restaurantMenu--infoPrice'>
                                    <p>R$ {menu.price}</p>
                                </div>
                            </div>

                            <div className='restaurantMenu--infoAdditional'>
                                <div className='restaurantMenu--infoAdditionalTitle'>
                                    <p>Adicionais</p>
                                </div>
                                {menu.adds_item.map((additional) =>
                                    <div key={additional.id} className='restaurantMenu--infoAdditionalDetail'>
                                        <p>Item: {additional.item}</p>
                                        <p>Preço: R$ {additional.price}</p>
                                    </div> 
                                )}
                                <div className='restaurantMenu--infoAdditionalButton'>
                                    <Link 
                                        to={{ pathname: `/createadditional/${menu.id}`,}}
                                    >
                                        <p>Cadastrar adicional</p>
                                    </Link>    
                                </div>
                            </div>

                        </div>
                    </div>
                )}

                <div className='restaurantMenu--addProduct'>
                    <Link 
                        to={{ pathname: `/createproducts/${id}`,}}
                    >
                        <p>Cadastrar produto</p>
                    </Link>           
                </div>
            </div>



        </div>
    )}