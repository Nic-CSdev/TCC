import React from 'react'
import { useTheme } from '../../js/ThemeContext'
import Header from '../../pages/Header'
import '../../css/detalhes-curiosidades.css'
import Button from '../Button'

const Curiosidadesveg = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    return (
        <div className={`detalhes-curiosidade ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div className="detalhes-curiosidade-container">
                <section className='parallax parallax-bg'>
                    <h1 className={isDarkMode ? '' : 'white-text'}>5 curiosidades sobre o veganismo</h1>
                </section>
                <div className="conteudo-detalhe-curiosidade">
                    <p>
                        O veganismo, que a alguns anos atrás era algo desconhecido e pouco praticado no Brasil, começa a ter mais adeptos. Com isso, surgem mais informações sobre o assunto e muitas pessoas que buscam emagrecer ou querem uma vida mais saudável — sem contar aqueles que têm ideais em relação aos direitos dos animais — encontram cada vez mais opções de alimentação sem ter nada derivado de origem animal em seus cardápios. Seja por uma crença ou por uma questão de saúde, o veganismo é uma realidade que pode ser encarada. Separamos algumas curiosidades sobre esse tipo de alimentação para você ficar mais por dentro do assunto e, quem sabe, até despertar a vontade de tentar mudar os seus hábitos alimentares. Veja abaixo:
                    </p><br /><br />

                    <h2>Vontade de comer </h2><br />
                    <p>
                        Comer carne pode ser algo mais cultural do que uma necessidade biológica. Muitos adeptos do veganismo relatam como perderam totalmente a vontade de comer carne depois de se acostumarem aos seus hábitos alimentares veganos. É como se olhassem para um pedaço de carne e ele fosse algo indiferente, como olhar um isopor ou papelão. A carne deixa de despertar desejo depois de um tempo sem consumi-la.
                    </p><br /><br />

                    <h2>Ajuda na meditação</h2><br />
                    <p>
                        Os praticantes de meditação também relatam os benefícios de ficar sem comer carne e produtos de origem animal. Para quem tem um estilo de vida mais voltado para as práticas espirituais, excluir esses alimentos da dieta pode ajudar a deixar a mente mais tranquila e mais focada para práticas como a meditação e o relaxamento.
                    </p><br /><br />

                    <h2>Veganismo é diferente de vegetarianismo</h2><br />
                    <p>
                        Veganismo e vegetarianismo não são as mesmas coisas. Quem é vegano não consome nenhum tipo de produto ou alimento que tenha origem animal. Isso inclui produtos cosméticos, roupas, entre outras coisas. Já o vegetariano é mais flexível. Ele não come carne, mas consome alimentos como ovos e leite e também consome outros produtos que tenham algum componente de origem animal.
                    </p><br /><br />

                    <h2>Menos estresse</h2><br />
                    <p>
                        O consumo de carne tem um problema que vai além da ingestão dela. Dependendo de como o animal for tratado em cativeiro e como for abatido, pode liberar hormônios ligado ao estresse e medo. E depois consumimos esses hormônios. Por outro ângulo, esotéricos dizem que percebem esse efeito, mas vendo as energias que os animais emanam quando são tratados com crueldade. Dessa forma, acabamos consumindo todo esse padrão vibratório prejudicial que fica impregnado na carne por causa do tratamento que os animais recebem.
                    </p><br /><br />

                    <h2>Dieta rica em nutrientes </h2><br />
                    <p>
                        Um dos pontos fortes de uma dieta vegana é a quantidade de nutrientes, vitaminas e fibras que você pode ingerir. Como costuma ter alimentos mais saudáveis em sua composição, essa dieta pode ajudar até mesmo a prevenir algumas doenças e a manter o organismo funcionando bem. O importante é conversar com especialistas e pedir para um nutricionista ajudar no plano alimentar. Dessa forma, você poderá ter uma alimentação saudável e sem se preocupar com falta de nutrientes.
                    </p><br /><br />

                    <hr />
                    <p className={isDarkMode ? '' : 'black-text'}>Artigo escrito por Ricardo Sturk da Equipe Horóscopo Virtual.</p>

                </div><br />

                <div className="btn-voltar">
                    <a href='curiosidades'>{"< Voltar"}</a>
                </div>
            </div>

            <Button/>
        </div>
    )
}

export default Curiosidadesveg