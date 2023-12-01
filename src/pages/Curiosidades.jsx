import React from 'react'
import { useTheme } from '../js/ThemeContext';
import Header from './Header';
import FrutasLeg from '../assets/frutas-legumes.jpg'
import Saude from '../assets/saude.jpg'
import Famosos from '../assets/famosos.jpg' 
import ComidaCid from '../assets/cidades.jpg'
import '../css/curiosidades.css'

const Curiosidades = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    return (
        <div className={`curiosidade-container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div className="curiosidades">
                <div className="curiosidade">
                    <div className="ilustracao">
                        <img src={FrutasLeg} alt="Imagem de ilustrativa de frutas e legumes" />
                    </div>
                    <div className="conteudo conteudo-curiosidade">
                        <h1>5 curiosidades sobre o veganismo</h1>
                        <p>Separamos algumas curiosidades sobre esse tipo de alimentação para você ficar mais por dentro do assunto e, quem sabe, até despertar a vontade de tentar mudar os seus hábitos alimentares.</p>
                        <a className="btn-curiosidade" href="curiosidadesveg">Ver detalhes </a>
                    </div>
                </div>

                <div className="curiosidade">
                    <div className="ilustracao">
                        <img src={Saude} alt="Imagem ilustrativa de alimentos saudáveis" />
                    </div>
                    <div className="conteudo conteudo-curiosidade">
                        <h1>8 fatos que mostram que um mundo vegano é melhor</h1>
                        <p>Listamos 8 fatos que provam que um mundo vegano é muito melhor.</p>
                        <a className="btn-curiosidade" href="fatosveg">Ver detalhes </a>
                    </div>
                </div>

                <div className="curiosidade">
                    <div className="ilustracao">
                        <img src={Famosos} alt="Imagem de alguns famosos que são veganos" />
                    </div>
                    <div className="conteudo conteudo-curiosidade">
                        <h1>Veja os famosos que aderiram ao veganismo</h1>
                        <p>Nesta notícia, listamos alguns famosos que aderiram ao veganismo. Confira abaixo!</p>
                        <a className="btn-curiosidade" href="famosos">Ver detalhes </a>
                    </div>
                </div>

                <div className="curiosidade">
                    <div className="ilustracao">
                        <img src={ComidaCid} alt="Imagem ilustrativa de um shake" />
                    </div>
                    <div className="conteudo conteudo-curiosidade">
                        <h1>As 10 melhores cidades veganas no mundo</h1>
                        <p>Confira uma lista com as melhores cidades veganas no mundo, que você deveria visitar ou até mesmo viver em uma delas, seja vegano ou não!</p>
                        <a className="btn-curiosidade" href="cidadesveg">Ver detalhes </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Curiosidades