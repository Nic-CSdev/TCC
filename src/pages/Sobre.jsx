import React from 'react'
import { useTheme } from '../js/ThemeContext';
import Header from './Header';
import '../css/sobre.css'
import Logo from '../assets/greenchy3.png'


const Sobre = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className={`sobre ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className="sobre-nos">
        <div className="logo">
          <img src={Logo} alt="logo greenchy" />
        </div>
        <div className="quem-somos">
          <h1>Quem Somos?</h1>
          <p>Somos um grupo de estudantes empenhados em fomentar e espalhar a cultura vegana pelo mundo, divulgando curiosidades, informações e facilitando o acesso a esse estilo de vida por meio de artigos e ferramentas.</p>
        </div>
      </div>
    </div>
  )
}

export default Sobre