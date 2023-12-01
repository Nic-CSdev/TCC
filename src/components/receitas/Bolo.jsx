import React from 'react'
import { useTheme } from '../../js/ThemeContext';
import Header from '../../pages/Header';
import bolo from '../../assets/bolo-de-melado.jpeg'

const Bolo = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    return (
        <div className={`bolo ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div className="detalhes-receita-container">
                <h1 className="detalhes-titulo">Bolo de Melado</h1>
                <div className="ilustracao">
                    <img src={bolo} alt="Ilustração de um bolo de melado" />
                </div>
                <div className="conteudo-receita">
                    <p>
                        O bolo de melado é uma verdadeira iguaria que combina o rico sabor do melado com a suavidade de um bolo macio e reconfortante. Feito com ingredientes naturais, esse bolo oferece uma doçura única e agradável, proveniente do melado, que é uma alternativa mais saudável ao açúcar refinado. Cada mordida desse bolo é um convite para apreciar uma experiência gustativa autêntica e cheia de sabor.
                    </p><br /><br />

                    <h2>Ingredientes:</h2><br />

                    <ul>
                        <li className="item">
                            1 xícara de melado de cana (ou mel de engenho ou melaço);
                        </li>
                        <li className="item">
                            1 xícara de leite vegetal (usei leite de soja não adoçado, mas você pode usar um leite
                            adoçado se quiser um bolo mais doce);
                        </li>
                        <li className="item">
                            3/4 xícara de azeite de oliva
                        </li>
                        <li className="item">
                            1 1/2 xícara de farinha de trigo integral;
                        </li>
                        <li className="item">
                            1/2 xícara de farinha de aveia (ou farelo de aveia ou triture aveia em flocos no
                            liquidificador);
                        </li>
                        <li className="item">
                            2 colher (chá) de canela;
                        </li>
                        <li className="item">
                            1 colher (chá) de gengibre em pó;
                        </li>
                        <li className="item">
                            1/2 colher (chá) de noz moscada ralada;
                        </li>
                        <li className="item">
                            1 colher (chá) de bicarbonato de sódio;
                        </li>
                        <li className="item">
                            Um punhado de amêndoas em lascas (opcional).
                        </li>
                    </ul>

                    <h2>Modo de Preparo:</h2><br />

                    <ul className="lista-preparo">
                        <li className="item">
                            Pré-aqueça o forno em temperatura média
                        </li>
                        <li className="item">
                            Coloque o melado, leite vegetal e azeite em uma panela pequena e aqueça em fogo muito baixo
                        </li>
                        <li className="item">
                            Mexa bem pra dissolver o melado e desligue o fogo quando a mistura amornar (não deixe esquentar
                            demais)
                        </li>
                        <li className="item">
                            Misture a farinha, aveia, especiarias, bicarbonato e sal e despeje a mistura líquida por cima. Mexa delicadamente (com um batedor manual estilo “fouet” é perfeito pra misturar a massa) até incorporar os ingredientes secos aos molhados. A massa é mais líquida do que massas pra bolos tradicionais.
                        </li>
                        <li className="item">
                            Unte (com óleo) e enfarinhe uma forma pequena para bolo inglês (por exemplo, uma forma redonda)
                        </li>
                        <li className="item">
                            Despeje a massa na forma, cubra com as amêndoas em lascas, se estiver usando, e leve ao forno
                        </li>
                    </ul>
                    <p>
                        <strong>Dica:</strong> Para testar o cozimento, insira uma faca ou palito no centro do bolo: ele está pronto quando ela sair limpa. Cuidado pra não assar demais, ou o bolo ficará seco. Esse bolo fica ainda mais gostoso no dia seguinte, então o ideal é prepará-lo na véspera da degustação.
                    </p>
                </div><br />
            
                <div className="btn-voltar">
                    <a href="receitas">{"< Voltar"}</a>
                </div>
            </div>
        </div>
    )
}

export default Bolo