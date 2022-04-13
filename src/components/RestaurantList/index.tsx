import { Link } from 'react-router-dom';
import './restaurantList.css';

export const RestaurantList: React.FC<{}> = (props) => {

    return (
        <div className='restaurantList'>
            <div className='restaurantList--title'>
                <a>Lista de restaurantes</a>
            </div>
            <div className='restaurantList--card'>
                <div className='restaurantList--image'>
                    <img src="https://i.ibb.co/MRvHqwT/Logo-Pizzaria-Dom-Ant-nio-Italian-Food.png" alt="mascot" />
                </div>
                <div className='restaurantList--info'>
                    <div className='restaurantList--infoTitle'>
                        <a>Dom Antônio</a>
                    </div>
                    <div className='restaurantList--infoDescription'>
                        <a>Um restaurante com o melhor da culinária italiana, com música ao vivo e um prato especial, feito pelo chef Antônio da Fonseca, todas as sexta-feiras.</a>
                    </div>
                        <Link to="/restaurantmenu" className='restaurantList--infoBottom'>
                            <a>ver cardápio</a>
                        </Link>
                </div>
            </div>
        </div>
    )}