import React from 'react';
import { useTheme } from '../js/ThemeContext'; 
import IconeSol from '../assets/icone-sol.png';
import IconeLua from '../assets/icone-lua.png';
import Logo from '../assets/greenchy3.png';
import '../css/header.css';
import Dropdown from './Dropdown';

const Header = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className="cabecalho">
            <header className="header">
                <div className="logo">
                    <a href="/">
                        <img src={Logo} alt="" />
                    </a>
                </div>
                <Dropdown />
                <nav className="navegacao">
                    <ul className="menu">
                        <li className="item">
                            <a href="/">Início</a>
                        </li>
                        <li className="item">
                            <a href="info">Informações</a>
                        </li>
                        <li className="item">
                            <a href="curiosidades">Curiosidades</a>
                        </li>
                        <li className="item">
                            <a href="restaurantes">Restaurantes</a>
                        </li>
                        <li className="item">
                            <a href="food-changer">Food changer</a>
                        </li>
                        <li className="item">
                            <a href="receitas">Receitas</a>
                        </li>
                        <li className="item">
                            <a href="sobre">Sobre nós</a>
                        </li>
                    </ul>
                </nav>
                <div className='botao'>
                    <button
                        id='btn-mudar-tema'
                        onClick={toggleTheme}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            padding: '0',
                        }}
                    >
                        <img className={`imagem-botao ${isDarkMode ? 'lua' : 'sol'}`} src={isDarkMode ? IconeLua : IconeSol} alt="" />
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Header;
