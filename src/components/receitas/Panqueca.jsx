import React from 'react';
import { useTheme } from '../../js/ThemeContext';
import Header from '../../pages/Header';
import panqueca from '../../assets/panqueca.jpg'

const Panqueca = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    return (
        <div className={`panqueca ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div className="detalhes-receita-container">
                <h1 className="detalhes-titulo">Panqueca americana Vegana</h1>
                <div className="ilustracao">
                    <img src={panqueca} alt="Ilustração de panqueca americana" />
                </div>
                <div className="conteudo-receita">
                    <p>
                        As panquecas americanas veganas são uma tentação matinal que combina sabor e escolhas éticas. Feitas sem ingredientes de origem animal, como ovos e leite, essas panquecas mantêm a textura fofa e o sabor irresistível das tradicionais. Regadas com xarope de bordo ou acompanhadas por frutas frescas, elas oferecem uma experiência deliciosa e consciente para um começo de dia perfeito.
                    </p><br /><br />

                    <h2>Ingredientes:</h2><br />

                    <ul>
                        <li className="item">2 xícaras (chá) de farinha de trigo;</li>
                        <li className="item">3 colheres (sopa) de açúcar;</li>
                        <li className="item">3 colheres (sopa) de bicarbonato de sódio ou fermento em pó;</li>
                        <li className="item">1 colher de (chá) de sal;</li>
                        <li className="item">2 xícaras (chá) de leite vegetal (soja, aveia, arroz..);</li>
                        <li className="item">1 colher (chá) de essência de baunilha;</li>
                        <li className="item">3 colheres (sopa) de óleo;</li>
                        <li className="item">Morango, banana ou mirtilo (opcional);</li>
                        <li className="item">Xarope de bordo, melado de cana ou glicose de milho (opcional).</li>
                    </ul>

                    <h2>Modo de Preparo:</h2><br />

                    <ul className="lista-preparo">
                        <li className="item">Em uma vasilha funda, coloque todos os ingredientes secos menos o bicarbonato ou fermento em pó</li>
                        <li className="item">Adicione o leite e bata bem com um batedor de ovos, adicione o óleo e a essência de baunilha, misture bem com o batedor.</li>
                        <li className="item">Por último adicione o fermento e mexa bem.
                        </li>
                        <li className="item">Use uma frigideira anti-aderente já aquecida, no momento em que a massa começar a ficar firme em cima, vire-a para completar o cozimento.
                        </li>
                        <li className="item">Sirva com alguma fruta de sua preferência com um pouco de xarope de bordo, melado de cana, etc.
                        </li>
                    </ul>
                    <p><strong>Dica:</strong> A massa pronta pode ser guardada na geladeira durante 2 dias sem nenhum problema. Ou, você pode fazer todas e deixar guardado na geladeira por 3 dias.</p>
                </div><br />

                <div className="btn-voltar">
                    <a href="receitas">{"< Voltar"}</a>
                </div>
            </div>
        </div>
    )
}

export default Panqueca