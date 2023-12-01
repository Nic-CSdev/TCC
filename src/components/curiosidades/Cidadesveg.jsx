import React from 'react'
import { useTheme } from '../../js/ThemeContext'
import Header from '../../pages/Header'
import Button from '../Button';

const Cidadesveg = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    return (
        <div className={`detalhes-curiosidade ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div className="detalhes-curiosidade-container">
                <section className='parallax parallax-bg-3'>
                    <h1 className={isDarkMode ? '' : 'white-text'}>10 melhores cidades veganas no mundo</h1>
                </section>
                <div className="conteudo-detalhe-curiosidade">
                    <p>
                        As cidades mais legais do mundo já se tornaram sede para uma variedade de comida cruelty-free, servindo uma diversidade imensa de cozinha vegana, desde cozinha chinesa vegana e sushi vegano, até frango frito vegano. Nós já escolhemos algumas das melhores cidades vegetarianas (pra quem curte esse tipo de comida também). <br /><br />

                        Dessa vez, aqui está uma lista com as melhores cidades veganas no mundo, que você deveria visitar ou até mesmo viver em uma delas, seja vegano ou não!
                    </p><br /><br />

                    <h2>1. Londres, UK </h2><br />
                    <p>
                        Londres possui uma incrível variedade de delícias veganas e não há dúvidas do porquê a história da cidade está tão relacionada com direitos animais. <br /><br />

                        Desde mercados que vendem uma grande variedade de comidas vegetarianas e petiscos, até mesmo os incríveis restaurantes que não são apenas vegan-friendly, mas também uma grande opção para todos os gostos. Por conta disso, Londres é um lugar fácil para comer sem se envolver com produtos de origem animal. <br /><br />

                        O Temple of Hackney  é o primeiro mercado de frango frito vegano no mundo e é com certeza uma parada obrigatória para todos os veganos que querem provar um pouco de frango frito (de mentirinha) e outras delícias que eles usualmente não poderiam comer.
                    </p><br /><br />

                    <h2>2. Berlim, Alemanha</h2><br />
                    <p>
                        Schivelbeiner Straße, também conhecida como Rua Vegana, é um lugar difícil de tirar do topo quando falamos das melhores cidades veganas. A cidade é lotada de restaurantes, cafés e lojas de roupa que são exclusivas para vegetarianos e veganos. <br /><br />

                        Prenzlauer Berg, um dos bairros mais bonitos de Berlim, e Veganz, a primeira rede de supermercados vegana na Europa, também mostram a perfeita justa-posição que é a cidade, muito mais do que apenas linguiça e schnitzel!
                    </p><br /><br />

                    <h2>3. New York, EUA</h2><br />
                    <p>
                        Desde 2008, Nova York é conhecida como a melhor cidade para veganos nos Estados Unidos, o que não é uma grande surpresa. <br /><br />

                        Nova York oferece alternativas veganas para basicamente qualquer tipo de comida que você possa desejar, seja um sanduíche feito de grãos de soja, um hambúrguer de mentira (que até mesmo sangra) ou um café da manhã completo (com direito a bacon de mentira). Nova York tem tudo isso. <br /><br />

                        Alguns dos lugares que você precisa conhecer são Blossom Vegan, Buddha Bodai e Dirt Candy (que tecnicamente é vegetariano, mas também serve a veganos).
                    </p><br /><br />

                    <h2>4. Tel Aviv, Israel</h2><br />
                    <p>
                        Tel Aviv se estabeleceu como uma das melhores cidades veganas do mundo e com certeza é um lugar amigável para veganos também. Além dos deliciosos falafels que podem ser encontrados em qualquer esquina, o Kebab vegetariano também pode ser visto com facilidade por toda a cidade. <br /><br />

                        Anastasia se destaca na multidão e é com certeza um lugar que os veganos precisam visitar.
                    </p><br /><br />

                    <h2>6. Amsterdam, Holanda</h2><br />
                    <p>
                        Amsterdam sempre foi destaque na cultura vegana. Jacketz comanda o show com uma enorme seleção de batatas com ingredientes veganos que são uma delícia. A sua salada de batata beetroot é a assinatura da casa e é simplesmente fabulosa.

                        The Avocado Show também vale uma visita - como o nome já indica, eles trazem abacate para todos os pratos e conseguem fazer sabores surpreendentes com ele.
                    </p><br /><br />

                    <h2>7. Paris, França</h2><br />
                    <p>
                        Por mais que pareça ser famosa por pratos que não são veganos, Paris também tem acrescentado muitas opções para esse público, com mais de 45 restaurantes já pontuados ao redor da cidade.
                        <br /><br />

                        Hank burguer é um lugar maravilhoso para ser visitado, com o festival de música pop Smmmile que leva o veganismo a outro nível e o promove como estilo de vida (é um sucesso!). Bon appétit!
                    </p><br /><br />

                    <h2>8. Turin, Itália</h2><br />
                    <p>
                        Veganismo pode não ser a primeira palavra que vem a sua mente quando você pensa na Itália e na cozinha italiana, mas considere Turin uma pioneira que vale a pena ser visitada, além de todas as outras razões turísticas, é claro.<br /><br />

                        Visite Coox ou Il Gusto di Carmilla para pizza vegana e sorvete feito com leite de amêndoas, respectivamente.
                    </p><br /><br />

                    <h2>9. Mumbai, Índia</h2><br />
                    <p>
                        Mumbai é a casa de uma das maiores comunidades veganas do mundo, logo veganos podem facilmente se sentir em casa. <br /><br />

                        Combinado ao sabores exóticos e frescos produzidos pela culinária, prove alguns dos nossos restaurantes favoritos que são: Sequel Bistro and Juice Bar ou Bastian (que não é vegano, mas possui uma variedade incrível de pratos nesse estilo) e Bombay Bizare Bakers.
                    </p><br /><br />

                    <h2>10. Roma </h2><br />
                    <p>
                        Uma cidade incrível, com uma culinária riquíssima – até mesmo para os veganos <br /><br />

                        Breaking Bread Bistro é um dos restaurantes veganos mais requintados da cidade e com certeza poderá proporcionar a você uma experiência italiana espetacular (e completamente sem origem animal).
                    </p><br /><br />

                    <hr />
                    <p className={isDarkMode ? '' : 'black-text'}>Artigo escrito por Llayda - Blog EF Go</p>

                </div><br />

                <div className="btn-voltar">
                    <a href='curiosidades'>{"< Voltar"}</a>
                </div>
            </div>

            <Button/>
        </div>
    )
}

export default Cidadesveg