import './about.css';

export const About: React.FC<{}> = (props) => {

    return (
        <div className='about'>
            <div className='about--title'>
                <p>Sobre</p>
            </div>
            <div className='about--subtitle'>
                <p>Site desenvolvido como projeto final da Globotech Academy</p>
            </div>

            <div className='about--card'>
                <div className='about--info'>
                    <div className='about--team'>
                        <p>Equipe:</p>
                    </div>
                    <div className='about--teamMembers'>
                        <p>Gabriel dos Santos Martins</p>
                        <p>Natália de Souza Guimarães</p>
                        <p>Ricardo Luís dos Santos Pinheiro</p>
                        <p>Thais Minas da Silva</p>
                    </div>
                    <div className='about--github'>
                        <p>Repositório do projeto:</p>
                    </div>
                    <div className='about--githubLink'>
                        <a href="https://github.com/JSONs-Food-GTA-Company" target="_blank" rel="noreferrer">https://github.com/JSONs-Food-GTA-Company</a>
                    </div>
                </div>
                <div className='about--image'>
                    <img src="https://i.ibb.co/4VgJ3nv/mascot.png" alt="mascot" />
                </div>
            </div>
        </div>
    )}