import React from 'react'
import { useTheme } from '../js/ThemeContext'; 
import Header from './Header'
import '../css/info.css'
import '../css/inicio.css'
import Button from '../components/Button';

const Info = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    
  return (
    <div className={`info ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
    <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <div className="informacoes">
            <h1> Sobre o Veganismo</h1>

            <h2>O que é o <strong>Veganismo</strong>?</h2>
            <p>
                Veganismo é um estilo de vida e uma filosofia que busca excluir, na medida do possível e praticável,
                todas as formas de exploração e crueldade animal, seja na alimentação, vestuário, produtos de higiene
                pessoal, entretenimento e outras áreas. Os veganos evitam o consumo de produtos de origem animal, como
                carne, laticínios, ovos e mel, e também se esforçam para não utilizar produtos que envolvam a exploração
                animal, como roupas feitas de couro, lã ou seda, cosméticos testados em animais e produtos que contenham
                ingredientes de origem animal.

                <br/><br/>

                Além das preocupações com os animais, muitos veganos também adotam esse estilo de vida devido a
                preocupações ambientais e de saúde. A produção animal em larga escala está associada a questões como
                desmatamento, consumo excessivo de água e emissões de gases de efeito estufa. Além disso, estudos têm
                mostrado que dietas baseadas em plantas podem ser benéficas para a saúde, reduzindo o risco de certas
                doenças crônicas.

                <br/><br/>

                O veganismo não é apenas uma dieta, mas sim um conjunto de valores éticos que busca promover um maior
                respeito e consideração pelos animais, pelo meio ambiente e pela saúde humana. É importante notar que o
                grau de comprometimento com o veganismo pode variar de pessoa para pessoa, mas a ideia central é
                minimizar o uso e o consumo de produtos de origem animal.
            </p>

            <h2>Qual a importância dessa prática?</h2>
            <p>
                O veganismo é importante na vida das pessoas por várias razões:
            </p>
            <ul className="lista">
                <li className="item">
                    <strong>Ética Animal: </strong> O veganismo é baseado na preocupação com o bem-estar dos animais.
                    Muitas pessoas consideram cruel e injusto explorar animais para satisfazer as necessidades humanas,
                    especialmente quando existem alternativas disponíveis.
                </li><br/>

                <li className="item">
                    <strong>Sustentabilidade Ambiental: </strong> A produção animal em larga escala está associada a
                    impactos ambientais significativos, como desmatamento, uso excessivo de água e emissões de gases de
                    efeito estufa. O veganismo contribui para a redução desses impactos, ajudando a preservar recursos
                    naturais e mitigar as mudanças climáticas.
                </li><br/>

                <li className="item">
                    <strong>Saúde Humana: </strong> Dietas baseadas em plantas têm sido associadas a diversos benefícios
                    para a saúde, como redução do risco de doenças cardiovasculares, diabetes tipo 2, certos tipos de
                    câncer e obesidade. Ao adotar uma dieta vegana equilibrada, as pessoas podem melhorar sua saúde
                    geral.
                </li><br/>

                <li className="item">
                    <strong>Conservação dos Recursos: </strong> A produção de alimentos de origem animal requer mais
                    recursos, como água e terra, em comparação com a produção de alimentos vegetais. Ao adotar uma dieta
                    vegana, as pessoas podem contribuir para a conservação desses recursos finitos.
                </li><br/>

                <li className="item">
                    <strong>Consciência Alimentar: </strong> O veganismo exige que as pessoas estejam mais conscientes
                    das escolhas alimentares que fazem. Isso pode levar a uma maior valorização dos ingredientes e da
                    preparação dos alimentos, promovendo uma relação mais saudável com a comida.
                </li><br/>

                <li className="item">
                    <strong>Impacto Social: </strong> Ao adotar o veganismo, as pessoas podem influenciar suas redes
                    sociais e comunidades, promovendo uma maior conscientização sobre os problemas associados à
                    exploração animal e à produção de alimentos de origem animal.
                </li><br/>

                <li className="item">
                    <strong>Inovação Alimentar: </strong> A crescente demanda por alimentos veganos tem impulsionado a
                    inovação na indústria alimentícia, levando ao desenvolvimento de alternativas de origem vegetal para
                    produtos tradicionalmente baseados em animais, como hambúrgueres, queijos e leite.
                </li>
            </ul>
            <p>
                Em resumo, o veganismo não apenas promove o respeito pelos animais, mas também aborda questões de saúde,
                meio ambiente e ética. A decisão de adotar um estilo de vida vegano pode ter um impacto positivo
                significativo nas vidas das pessoas, nos animais e no planeta como um todo.
            </p>

            <h2>E os benefícios?</h2>
            <p>
                Além disso tudo, essa prática oferece uma variedade de benefícios para os indivíduos, para os animais e para o meio ambiente. Aqui estão alguns dos principais benefícios associados ao estilo de vida vegano:
            </p>
            <ul className="lista">
                <li className="item">
                    <strong>Saúde: </strong> Dietas veganas bem planejadas podem ser ricas em fibras, vitaminas, minerais e antioxidantes. Estudos sugerem que dietas veganas podem ajudar a reduzir o risco de doenças cardíacas, diabetes tipo 2, pressão alta, certos tipos de câncer e obesidade. Além disso, muitas pessoas relatam ter mais energia e melhor digestão após adotar uma dieta vegana.
                </li><br/>

                <li className="item">
                    <strong>Perda de Peso: </strong> Muitas pessoas experimentam perda de peso ao adotar uma dieta vegana devido à redução no consumo de calorias provenientes de alimentos de origem animal, que tendem a ser mais ricos em gorduras e calorias.
                </li><br/>

                <li className="item">
                    <strong>Ética Animal: </strong> O veganismo é fundamentado no respeito pelos direitos dos animais e na rejeição da exploração animal para alimentação, vestuário, entretenimento e outros fins. Ao adotar o veganismo, as pessoas contribuem para a redução do sofrimento animal e promovem uma maior consciência sobre os direitos dos animais.
                </li><br/>

                <li className="item">
                    <strong>Meio Ambiente: </strong> A produção animal em larga escala é uma das principais causas de desmatamento, consumo de água e emissões de gases de efeito estufa. Ao optar por uma dieta vegana, as pessoas podem reduzir sua pegada ambiental, ajudando a preservar ecossistemas naturais e mitigar as mudanças climáticas.
                </li><br/>

                <li className="item">
                    <strong>Inovação Alimentar: </strong> A crescente demanda por produtos veganos tem impulsionado a indústria alimentícia a desenvolver alternativas de origem vegetal para produtos tradicionalmente baseados em animais, como hambúrgueres vegetais, leites à base de plantas e queijos veganos, proporcionando mais opções para os consumidores.
                </li><br/>

                <li className="item">
                    <strong>Variedade Alimentar: </strong> O veganismo pode expandir a variedade de alimentos que as pessoas consomem, incentivando a exploração de diferentes ingredientes, culturas culinárias e métodos de preparo.
                </li><br/>

                <li className="item">
                    <strong>Consciência Alimentar: </strong> Ao se tornarem veganas, as pessoas muitas vezes se tornam mais conscientes das escolhas alimentares que fazem, priorizando alimentos integrais, frescos e nutritivos.
                </li><br/>

                <li className="item">
                    <strong>Solidariedade Global: </strong> O veganismo também pode ser visto como uma forma de solidariedade global, uma vez que a produção de alimentos de origem animal muitas vezes compete com a produção de alimentos para pessoas em situações de fome no mundo.
                </li>
            </ul>
            <p>
                Vale ressaltar que, enquanto o veganismo oferece muitos benefícios, é importante planejar cuidadosamente uma dieta vegana para garantir que todas as necessidades nutricionais sejam atendidas. Consultar um profissional de saúde ou nutricionista pode ser útil para garantir que você esteja obtendo todos os nutrientes necessários.
            </p>
        </div>

        <Button></Button>
    </div>
  )
}

export default Info