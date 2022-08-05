const nome = document.getElementById("nome");
const email = document.getElementById("email");
const numero = document.getElementById("numero");
const pergunta = document.getElementById("pergunta");

const url = 'http://localhost/teste-frontend-developer/api/perguntas';

function fazPost(perguntaData){
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type","application/json")
    request.send(JSON.stringify(perguntaData))

    request.onload = function (){
        console.log(this.responseText)
    }

    return request.responseText
}

const cadastrarPergunta = async (e) =>{
    
    e.preventDefault();
    
    const init = {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            nome: nome.value,
            email: email.value,
            numero: numero.value,
            pergunta: pergunta.value,
        }),
        
    }
    
    const response = await fetch("http://localhost/teste-frontend-developer/api/perguntas", init).then((response)=>console.log(response));

}

document.getElementById("button-enviar").addEventListener("click",cadastrarPergunta);