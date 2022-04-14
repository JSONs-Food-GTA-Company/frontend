import { Link } from 'react-router-dom';
import './restaurantCreateOk.css';

export const RestaurantCreateOk: React.FC<{}> = (props) => {

    return (
        <div className='RestaurantCreateOk'>
            <a>Restaurante cadastrado com sucesso</a>
        
                <div className='restaurant--bottomArea'>
                <Link to="/restaurantcreateok" className='restaurant--botton'>
                  <p>cadastrar</p>
                </Link>
                </div>
        </div>
    )}