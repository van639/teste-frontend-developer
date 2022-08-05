'use strict';
const url = 'http://localhost/teste-frontend-developer/api/';

const getPerguntas = async() =>{
    const response = await fetch(`${url}perguntas`);
    const duvidas = await response.json();
    return duvidas;
};

export{
    getPerguntas
};