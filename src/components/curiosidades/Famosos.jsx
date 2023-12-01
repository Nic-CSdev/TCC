import React from 'react'
import { useTheme } from '../../js/ThemeContext'
import Header from '../../pages/Header'
import Button from '../Button';

const Famosos = () => {
    const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className={`detalhes-curiosidade ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div className="detalhes-curiosidade-container">
                <section className='parallax parallax-bg-4'>
                    <h1 className={isDarkMode ? '' : 'white-text'}>Veja os famosos que aderiram ao veganismo</h1>
                </section>
                <div className="conteudo-detalhe-curiosidade">
                    <p>
                        Após ser noticiado que Wanessa Camargo estaria disposta a se adaptar aos hábitos de vida do namorado, o ator Dado Dolabella, que é vegano e há anos não come carne e nenhum alimento que tenha origem animal, a IstoÉ Gente lista alguns famosos, que assim como o ator, também aderiram ao veganismo. Confira abaixo!
                    </p><br /><br />

                    <h2>Fernanda Lima</h2><br />
                    <p>
                        A apresentadora Fernanda Lima adotou hábitos veganos por amor a filha caçula, Maria Manoela, que tem intolerância a leite de vaca. “Eu nunca fui vegana e não sou, mas a minha bebê está com alergia a leite de vaca. Então, eu não posso tomar nada que tenha leite ou algo que tenha queijo e manteiga. Praticamente estou me tornando uma vegana”, disse ela em entrevista ao canal GNT. <br /> <br />

                        “Eu me informei muito sobre o assunto e agora estou procurando outros tipos de alimentação. É uma forma de evoluir também”, completou Lima.
                    </p><br /><br />

                    <h2>Isabelle Drummond</h2><br />
                    <p>
                        Em algumas entrevistas, a atriz disse que prioriza a alimentação vegana por não concordar com a forma que os animais são tratados. Isabelle também se define como ‘natureba’ e não come fritura e nem bebe refrigerante.
                    </p><br /><br />

                    <h2>Lewis Hamilton</h2><br />
                    <p>
                        O piloto Lewis Hamilton, que é vegano desde 2017 atribui à dieta plant-based seu sucesso colossal nas pistas. “Todos nós temos uma voz. Eu tenho essa plataforma influente e, portanto, não usá-la corretamente seria um erro da minha parte. Ninguém é perfeito, eu certamente não sou, mas o abuso está acontecendo todos os dias a tantos animais em todo o mundo. É por isso que decidi seguir uma dieta vegana”, disse Hamilton sobre o assunto.
                    </p><br /><br />

                    <h2>Sonia Abrão</h2><br />
                    <p>
                        Em junho de 2017, a jornalista e apresentadora adotou novos hábitos alimentares e se tornou vegana. Sonia disse que a mudança alimentar levou meses de adaptação.
                    </p><br /><br />

                    <h2>Xuxa Meneghel </h2><br />
                    <p>
                        “O mundo será melhor quando respeitarmos a vida. Tirar o sofrimento e a morte dos pratos é um grande gesto e uma grande mudança cultural. É inadmissível que tenhamos que tolerar pandemias, ignorância e ganância do homem pelo gosto ou sabor de minutos na nossa boca. Vale a pena tantas mortes? Vale a pena tantas doenças?”, disse Xuxa ao dar uma entrevista. A apresentadora é vegana desde 2018.
                    </p><br /><br />

                    <hr />
                    <p className={isDarkMode ? '' : 'black-text'}>Artigo escrito por Letícia Sena - IstoÉ</p>

                </div><br />

                <div className="btn-voltar">
                    <a href='curiosidades'>{"< Voltar"}</a>
                </div>
            </div>

            <Button/>
        </div>
  )
}

export default Famosos