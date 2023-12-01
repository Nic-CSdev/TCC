import React from 'react'
import { useTheme } from '../js/ThemeContext';
import { FaWhatsapp } from 'react-icons/fa'
import '../css/inicio.css'
import VEG from '../assets/veganism.png'
import Header from './Header'
import '../css/responsive.css'


const Inicio = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className={`main ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div className="inicio">
                <div className="painel">
                    <img src={VEG} alt="" />
                </div>

                <div className="conteudo conteudo-inicio">
                    <h1>Bem-vindo à <strong className="palavra-destacada">GREENCHY</strong></h1>

                    <p>Seja bem-vindo(a) à nossa família vegana! Estamos entusiasmados(as) para compartilhar essa jornada
                        transformadora ao seu lado. Vamos construir um mundo mais gentil e sustentável, passo a passo, com
                        cada escolha que fazemos. Em nosso site, você encontrará receitas deliciosas, dicas de nutrição
                        balanceada e informações sobre o impacto positivo que o veganismo pode ter na nossa saúde e no meio
                        ambiente. Além disso, estaremos abordando questões éticas relacionadas aos animais, inspirando a
                        adoção de hábitos mais compassivos e responsáveis.</p>

                    <a href="info" className="saiba-mais">Saiba Mais</a>
                </div>
                <a href="https://wa.me/5511954950621/?text=Bom%20Dia!" target="_blank" className='btn-whatsapp-pulse'>
                    <FaWhatsapp className='whats' />
                </a>
            </div>
        </div>
        
    )
}

export default Inicio