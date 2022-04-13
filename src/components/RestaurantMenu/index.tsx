import './restaurantMenu.css';

export const RestaurantMenu: React.FC<{}> = (props) => {

    return (
        <div className='restaurantMenu'>
            
            <div className='restaurantMenu--titleArea'>
                <div className='restaurantMenu--image'>
                    <img src="https://i.ibb.co/MRvHqwT/Logo-Pizzaria-Dom-Ant-nio-Italian-Food.png" alt="logoRestaurant" />
                </div>
                <div className='restaurantMenu--info'>
                    <div className='restaurantMenu--title'>
                        <a>Dom Antônio</a>
                    </div>
                    <div className='restaurantMenu--subtitle'>
                        <a>Rua Capes de Macaína, nº 315, Boa Viagem, Recife</a>
                    </div>
                </div>
            </div>

            <div className='restaurantMenu--foodArea'>

                <div className='restaurantMenu--card'>
                    <div className='restaurantMenu--image'>
                        <img src="http://luciliadiniz.com/wp-content/uploads/2019/05/Polenta-com-molho-de-funghi-na-mesa.jpg" alt="foodImage" />
                    </div>
                    <div className='restaurantList--info'>
                        <div className='restaurantList--infoTitle'>
                            <a>Polenta com Funghi</a>
                        </div>
                        <div className='restaurantList--infoDescription'>
                            <a>Receita de polenta que leva molho cremoso com funghi seco e tempero especial</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )}