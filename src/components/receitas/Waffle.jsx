import React from 'react';
import { useTheme } from '../../js/ThemeContext';
import Header from '../../pages/Header';
import waffle from '../../assets/waffle.jpg'
import '../../css/detalhes.css'

const Waffle = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    return (
        <div className={`waffle ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div className="detalhes-receita-container">
                <h1 className="detalhes-titulo">Waffle Vegano</h1>
                <div className="ilustracao">
                    <img src={waffle} alt="Ilustração de um waffle" />
                </div>
                <div className="conteudo-receita">
                    <p>
                        Um waffle vegano é uma deliciosa opção para quem busca uma alimentação mais saudável e sustentável. Feito com ingredientes como farinha de aveia e leite vegetal, este waffle não apenas agrada ao paladar, mas também contribui para o bem-estar do planeta, sendo uma alternativa amiga do meio ambiente. Experimente essa indulgência consciente hoje mesmo!
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
                        <li className="item">Coloque um pouco da massa em uma máquina de waffles já aquecida e escolha o nível desejado.
                        </li>
                    </ul>
                    <p><strong>Dica:</strong> A massa pronta pode ser guardada na geladeira durante 2 dias sem nenhum problema. Ou, você pode fazer todas e deixar guardado na geladeira por 3 dias.</p>
                </div><br />

                <div className="btn-voltar">
                    <a href='receitas'>{"< Voltar"}</a>
                </div>
            </div>
        </div>
    )
}

export default Waffle