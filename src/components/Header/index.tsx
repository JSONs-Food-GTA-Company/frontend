import { Link } from 'react-router-dom';
import './header.css';

export const Header: React.FC<{}> = (props) => {

    return (
        <div className='header'>
            <div className='header--logo' >
                <Link to="/"><img src="https://i.ibb.co/K61PtKT/logo.png" alt="logo" /></Link>
            </div>
            <div className='header--buttons'>
                <a><Link to="/">home </Link></a>
                <a>restaurantes</a>
                <a><Link to="/createrestaurants">cadastrar</Link></a>
                <a><Link to="/about">sobre</Link></a>
            </div>
        </div>
    )}