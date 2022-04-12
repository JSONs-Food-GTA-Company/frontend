import './home.css';

export const Home: React.FC<{}> = (props) => {

    return (
        <div className='home'>

            <div className='header--titleArea'>
                <div className='header--title'>
                    <h1>Os  melhores restaurantes a um clique de distância</h1>
                </div>
                <div className='header--subTitle'>
                    <a>Acesse e se surpreenda com as delícias da culinária local</a>
                </div>
            </div>

            <div className='header--card'>

                <div className='header--cardLeft'>
                    <div className='header--cardTitle'>
                        <a>Restaurantes</a>
                    </div>
                    <div className='header--cardBottom'>
                        <a>lista completa</a>
                    </div>
                </div>

                <div className='header--cardRight'>
                    <img src="https://i.ibb.co/D7nC3Bp/restaurant.png" alt="restaurant" />
                </div>

            </div>
        </div>
    )}