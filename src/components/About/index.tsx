import { Link } from 'react-router-dom';
import './about.css';

export const About: React.FC<{}> = (props) => {

    return (
        <div className='about'>
            <div className='about--title'>
                <a>Sobre</a>
            </div>
            <div className='about--subtitle'>
                <a>Site desenvolvido como projeto final da Globotech Academy</a>
            </div>

            <div className='about--card'>
                <div className='about--info'>
                    <div className='about--team'>
                        <a>Equipe:</a>
                    </div>
                    <div className='about--teamMembers'>
                        <a>Gabriel dos Santos Martins</a>
                        <a>Natália de Souza Guimarães</a>
                        <a>Ricardo Luís dos Santos Pinheiro</a>
                        <a>Thais Minas da Silva</a>
                    </div>
                    <div className='about--github'>
                        <a>Repositório do projeto:</a>
                    </div>
                    <div className='about--githubLink'>
                        <a href="https://github.com/JSONs-Food-GTA-Company" target="_blank">https://github.com/JSONs-Food-GTA-Company</a>
                    </div>
                </div>
                <div className='about--image'>
                    <img src="https://i.ibb.co/4VgJ3nv/mascot.png" alt="mascot" />
                </div>
            </div>
        </div>
    )}