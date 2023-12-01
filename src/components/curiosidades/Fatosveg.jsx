import React from 'react'
import { useTheme } from '../../js/ThemeContext'
import Header from '../../pages/Header'
import VeganLF from '../../assets/vegan-lifestyle.jpg'
import Coracao from '../../assets/mao-no-coracao.jpg'
import Natura from '../../assets/natureza.jpg'
import Gases from '../../assets/gases.jpg'
import Comida from '../../assets/comida-vegana.jpg'
import Desmatamento from '../../assets/desmatamento.jpg'
import Legumes from '../../assets/legumes.jpg'
import Saguis from '../../assets/saguis.jpg'
import Button from '../Button'

const Fatosveg = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    return (
        <div className={`detalhes-curiosidade ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div className="detalhes-curiosidade-container">
                <section className='parallax parallax-bg-2'>
                    <h1 className={isDarkMode ? '' : 'white-text'}>8 fatos que mostram que um mundo vegano é melhor</h1>
                </section>
                <div className="conteudo-detalhe-curiosidade">
                    <p>
                        Listamos 8 fatos que provam que um mundo vegano é muito melhor:
                    </p><br /><br />

                    <ul className='lista-fatos'>
                        <li className="item">
                            Se todos se tornarem vegetariano até 2050, haverá 8 milhões de mortes a menos todos os anos. <br /><br />

                            <div className='imagem-fato'>
                                <img src={VeganLF} loading='lazy' alt="" />
                            </div>
                        </li><br /><br />


                        <li className="item">
                            Como tornar-se vegetariano diminui o risco de doenças cardíacas, diabetes, derrame e
                            alguns tipos de câncer, economizaríamos entre 2% e 3% do PIB em despesas médicas. <br /><br />

                            <div className='imagem-fato'>
                                <img src={Coracao} loading='lazy' alt="" />
                            </div>
                        </li><br /><br />

                        <li className="item">
                            Pastos voltariam a ser habitats naturais e florestas. Isso ajudaria a acabar com as mudanças climáticas e reaver a biodiversidade perdida. <br /><br />

                            <div className='imagem-fato'>
                                <img src={Natura} loading='lazy' alt="" />
                            </div>
                        </li><br /><br />
                        <li className="item">
                            De acordo com o pesquisador Marco Springmann, da Universidade de Oxford, as emissões de gases de estufa cairiam cerca de 60%. <br /><br />

                            <div className='imagem-fato'>
                                <img src={Gases} loading='lazy' alt="" />
                            </div>
                        </li><br /><br />

                        <li className="item">
                            Se todos se tornassem veganos, a economia pela redução das emissões de gases de efeito estufa seria de 570 bilhões de dólares por ano. <br /><br />

                            <div className='imagem-fato'>
                                <img src={Comida} loading='lazy' alt="" />
                            </div>
                        </li><br /><br />
                        <li className="item">
                            De acordo com a Agência Ambiental Holandesa, um mundo vegano seria responsável por cortar as emissões de carbono provenientes da agricultura em 17%, as emissões de metano em 24%, e as emissões de óxido nitroso em 21% até 2050. <br /><br />

                            <div className='imagem-fato'>
                                <img src={Desmatamento} loading='lazy' alt="" />
                            </div>
                        </li><br /><br />
                        <li className="item">
                            Um relatório “Proceedings”, da Academia Nacional de Ciências dos Estados Unidos, alega que a única forma de prevenir o aquecimento global em dois graus Celsius — significativo para um desastre climático — é o mundo se tornando vegano. <br /><br />

                            <div className='imagem-fato'>
                                <img src={Legumes} loading='lazy' alt="" />
                            </div>
                        </li><br />
                        <li className="item">
                            Incontáveis animais seriam salvos de uma vida miserável. <br /><br />

                            <div className='imagem-fato'>
                                <img src={Saguis} loading='lazy' alt="" />
                            </div>
                        </li>
                    </ul>

                    <hr />
                    <p className={isDarkMode ? '' : 'black-text'}>Artigo escrito por Aline Baroni - Desafio 21 dias sem carne</p>

                </div><br />

                <div className="btn-voltar">
                    <a href='curiosidades'>{"< Voltar"}</a>
                </div>
            </div>

            <Button/>
        </div>
    )
}

export default Fatosveg