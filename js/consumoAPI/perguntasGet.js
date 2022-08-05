'use strict';

import {getPerguntas} from './main.js'

const criarPergunta = ({pergunta}) =>{
    
    const card = document.createElement('div');
    card.classList.add('perguntas');
    card.innerHTML = `
    <p>${pergunta}</p>
    `;
    return card;

};


const carregarPerguntas = async () =>{
    const container = document.getElementById('container-perguntas-enviadas');
    const pergunta = await getPerguntas();
    const cards = pergunta.map(criarPergunta);
    container.replaceChildren(...cards);
}
carregarPerguntas();