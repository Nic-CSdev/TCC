import React, { useEffect } from 'react'
import { useTheme } from '../js/ThemeContext'
import Header from './Header';
import alimentosPorMacronutriente from '../js/foodChanger'
import '../css/foodchanger.css'

const FoodChanger = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    useEffect(() => {
        const carbButton = document.getElementById("carbButton");
        const proButton = document.getElementById("proButton");
        const fatButton = document.getElementById("fatButton");
        const foodList = document.getElementById("foodList");

        carbButton.addEventListener("click", () => {
            exibirAlimentos("carboidratos");
        });

        proButton.addEventListener("click", () => {
            exibirAlimentos("proteinas");
        });

        fatButton.addEventListener("click", () => {
            exibirAlimentos("gorduras");
        });

        function exibirAlimentos(macronutriente) {
            const alimentos = alimentosPorMacronutriente[macronutriente];
            if (alimentos) {
                const listaHTML = alimentos.map(alimento => `
                    <li>
                        <strong>${alimento.nome}</strong><br>
                        Quantidade: ${alimento.quantidade}<br>
                        Informação Nutricional: ${alimento[macronutriente]}
                    </li><br>`
                ).join("");
                foodList.innerHTML = `<ul>${listaHTML}</ul>`;
                foodList.style.display = "block";
            } else {
                foodList.innerHTML = "";
                foodList.style.display = "none";
            }
        }
    }, []);

    return (
        <div className={`food-changer-container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div className='food-changer'>

                <h2>Macronutrientes</h2>
                <p>Os macronutrientes são divididos em três grupos: os <strong className='palavra-destacada'>carboidratos</strong>, as <strong className='palavra-destacada'>proteínas</strong> e as <strong className='palavra-destacada'>gorduras</strong>. <br /><br />

                    Os <strong className='palavra-destacada' >carboidratos</strong>, encontrados em alimentos de origem vegetal, são responsáveis por fornecer energia para as funções do organismo e também para a realização de atividades físicas, por exemplo.
                    <br /><br />

                    As <strong className='palavra-destacada'>proteínas</strong>, por sua vez, que podem ser tanto de origem vegetal quanto animal, contribuem para formar tecidos e ainda são integrantes de reações metabólicas, como a síntese de alguns hormônios.
                    <br /><br />

                    Já as <strong className='palavra-destacada'>gorduras</strong> apresentam função de reserva energética, realizando o armazenamento e o transporte de alguns tipos de vitaminas. Podendo ser também de origem vegetal ou animal, elas ainda têm o papel de proteger os órgãos vitais.</p><br /><br />

                <hr />

                <div className='macronutriente-selector'>
                    <h2>Selecione um macronutriente e veja uma lista de alternativas veganas:</h2>
                    <div id="buttons">
                        <button id="carbButton">Carboidratos</button>
                        <button id="proButton">Proteínas</button>
                        <button id="fatButton">Gorduras</button>
                    </div>

                    <div id="foodList">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodChanger