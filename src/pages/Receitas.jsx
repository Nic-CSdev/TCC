import React from 'react'
import { useTheme } from '../js/ThemeContext';
import Header from './Header'
import Bolo from '../assets/bolo-de-melado.jpeg'
import Panqueca from '../assets/panqueca.jpg'
import Waffle from '../assets/waffle.jpg'
import Guacamole from '../assets/guacamole.jpg'
import '../css/receitas.css'
import '../routes/routes'

const Receitas = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    return (
        <div className={`receitas ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div className="receitas-container">
                <div className="receita">
                    <div className="ilustracao">
                        <img src={Waffle} alt="Ilustração de um Waffle" />
                    </div>
                    <div className="conteudo conteudo-receita">
                        <h1>Waffle Vegano</h1>
                        <p>Acabou de aderir ao veganismo e procura por uma receita simples para fazer em casa? Aprenda a fazer um delicoso Waffle Vegano</p>
                        <a className="btn-receita" href="waffle">Ver Receita </a>
                    </div>
                </div>

                <div className="receita">
                    <div className="ilustracao">
                        <img src={Panqueca} alt="Ilustração de panqueca" />
                    </div>
                    <div className="conteudo conteudo-receita">
                        <h1>Panqueca americana Vegana</h1>
                        <p>Descubra o prazer das panquecas americanas veganas! Uma opção simples e saborosa para seus cafés da manhã éticos. Experimente hoje mesmo!</p>
                        <a className="btn-receita" href="panqueca">Ver Receita </a>
                    </div>
                </div>

                <div className="receita">
                    <div className="ilustracao">
                        <img src={Bolo} alt="" />
                    </div>
                    <div className="conteudo conteudo-receita">
                        <h1>Bolo de Melado</h1>
                        <p>Explore o sabor nostálgico do bolo de melado. Nossa receita simples oferece um bolo úmido e reconfortante, perfeito para qualquer ocasião. Delicie-se com um pedaço desse sabor caseiro.</p>
                        <a className="btn-receita" href="bolo">Ver Receita </a>
                    </div>
                </div>

                <div className="receita">
                    <div className="ilustracao">
                        <img src={Guacamole} alt="" />
                    </div>
                    <div className="conteudo conteudo-receita">
                        <h1>Guacamole</h1>
                        <p>Prepare uma guacamole fresca e irresistível. Abacates cremosos misturados com temperos vibrantes criam um mergulho perfeito para petiscar. Saboreie a autêntica culinária mexicana em minutos.</p>
                        <a className="btn-receita" href="guacamole">Ver Receita </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Receitas