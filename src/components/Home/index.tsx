import { Link } from 'react-router-dom';
import './home.css';

export const Home: React.FC<{}> = (props) => {

    return (
        <div className='home'>

            <div className='header--titleArea'>
                <div className='header--title'>
                    <h1>Os  melhores restaurantes a um clique de distância</h1>
                </div>
                <div className='header--subTitle'>
                    <p>Acesse e se surpreenda com as delícias da culinária local</p>
                </div>
            </div>

            <div className='header--card'>

                <div className='header--cardLeft'>
                    <div className='header--cardTitle'>
                        <p>Restaurantes</p>
                    </div>
                        <Link to="/restaurantlist" className='header--cardButton'>
                            <p>lista completa</p>
                        </Link>
                </div>

                <div className='header--cardRight'>
                    <img src="https://i.ibb.co/D7nC3Bp/restaurant.png" alt="restaurant" />
                </div>

            </div>
        </div>
    )}