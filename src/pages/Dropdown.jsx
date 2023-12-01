import React from 'react'

const Dropdown = () => {
  return (
    <div className="dropdown">
      <nav>
        <input type="checkbox" id="menu-hamburguer" ></input>
          <label htmlFor="menu-hamburguer">
            <div className="menu">
              <span className="hamburguer"></span>
            </div>
          </label>
          

          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="info">Informações</a></li>
            <li><a href="curiosidades">Curiosidades</a></li>
            <li><a href="restaurantes">Restaurantes</a></li>
            <li><a href="food-changer">Food Changer</a></li>
            <li><a href="receitas">Receitas</a></li>
            <li><a href="sobre">Sobre Nós</a></li>
          </ul>
      </nav>
    </div>
  )
}

export default Dropdown