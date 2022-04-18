import { Link } from 'react-router-dom';
import './header.css';

export const Header: React.FC<{}> = (props) => {

    return (
        <div className='header'>
            <div className='header--logo' >
                <Link to="/"><img src="https://i.ibb.co/K61PtKT/logo.png" alt="logo" /></Link>
            </div>
            <div className='header--buttons'>
                <p><Link to="/">home</Link></p>
                <p><Link to="/restaurantlist">restaurantes</Link></p>
                <p><Link to="/createrestaurants">cadastro</Link></p>
                <p><Link to="/about">sobre</Link></p>
            </div>
        </div>
    )}