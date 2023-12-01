import React from 'react'
import { useTheme } from '../../js/ThemeContext';
import Header from '../../pages/Header';
import guaca from '../../assets/guacamole.jpg'

const Guacamole = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    return (
        <div className={`guacamole ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div className="detalhes-receita-container">
                <h1 className="detalhes-titulo">Guacamole</h1>
                <div className="ilustracao">
                    <img src={guaca} alt="Ilustração de um guacamole" />
                </div>
                <div className="conteudo-receita">
                    <p>
                        O abacate é um ótimo alimento para aqueles que buscam saúde, bem-estar e estética. Possui triptofano, um aminoácido relacionado à produção da serotonina, o clássico “hormônio da felicidade”. Além disso, é rico em vitamina E, um poderoso antioxidante que tem seus benefícios destacados na presença de vitamina C, presente no suco de limão.
                    </p><br /><br />

                    <h2>Ingredientes:</h2><br />

                    <ul>
                        <li className="item">1 Abacate maduro;</li>
                        <li className="item">1 Cebola roxa;</li>
                        <li className="item">1 Tomate italiano;</li>
                        <li className="item">3 colheres de suco de limão tahiti;</li>
                        <li className="item">2 colheres de azeite de oliva;</li>
                        <li className="item">1 Pimenta dedo de moça sem sementes;</li>
                        <li className="item">Coentro fresco;</li>
                        <li className="item">Sal marinho integral a gosto;</li>
                        <li className="item">Pimenta do reino a gosto.</li>
                    </ul>

                    <h2>Modo de Preparo:</h2><br />

                    <ul className="lista-preparo">
                        <li className="item">
                            Esmague o abacate com um garfo até começar a formar um creme, porém, não amasse muito para manter alguns pequenos pedaços.
                        </li>
                        <li className="item">
                            Adicione o limão e o azeite de oliva.
                        </li>
                        <li className="item">
                            Pique em brunoise (cubinhos) a cebola roxa, o tomate e a pimenta dedo de moça, e misture ao abacate.
                        </li>
                        <li className="item">
                            Tempere com sal e pimenta do reino a gosto e ajuste o limão, se necessário
                        </li>
                    </ul>
                </div><br />

                <div className="btn-voltar">
                    <a href="receitas">{"< Voltar"}</a>
                </div>
            </div>
        </div>
    )
}

export default Guacamole