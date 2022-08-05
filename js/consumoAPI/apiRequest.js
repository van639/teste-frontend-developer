/**
 * Função para fazer requisições a API
 * @param {string} method Método HTTP que será usado para a requisição
 * @param {string} URL URL do endpoint que será requisitado
 * @param {JSON} body (OPCIONAL) Objeto que será enviado como corpo da requisição
 * @returns {JSON} Objeto que representa a resposta da requisição
 */
 async function ApiRequest(method, URL, body = "GET") {    
    const bodyJson = JSON.stringify({...body});

    let options = {
        method: method,
        headers: {"Content-Type": "application/json"},
        body: bodyJson,
    };

    body === "GET"? options = undefined : "";   
    method === "DELETE"? options = { method: "DELETE"} : "";
    
    let response = await fetch(URL, options);
    return response = await response.json();
}

export default ApiRequest;