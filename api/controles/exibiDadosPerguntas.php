<?php
/******************************************************************************
        Objetivo: Arquivo responsavel pela busca ou listar as perguntas, 
        solicitando ao BD
        Data: 04/08/2022
        Autor: Vanderson
*******************************************************************************/
 
require_once (SRC.'bd/listarPerguntas.php');

// Recebe os dados de produtos
function exibirPerguntas () 
{
        $dados = listarPerguntas();
        return $dados;
}

// cria um array de produtos
function criarArrayPerguntas ($objeto)
{
    
    $cont = (int) 0;

    while($rsDados = mysqli_fetch_assoc($objeto))
    {
        $arrayDados[$cont] = array (
            "id"        =>      $rsDados['id_duvidas'],
            "nome"      =>      $rsDados['nome'],
            "email"     =>      $rsDados['email'],
            "numero"    =>      $rsDados['numero'],
            "pergunta"  =>      $rsDados['pergunta']
        );

        $cont ++;
    }

    if(isset($arrayDados))
        return $arrayDados;
    else
        return false;
}

function criarJSONPerguntas ($arrayDados)
{
    header("content-type:application/json/");

    $listPerguntasJSON = json_encode($arrayDados);

    if(isset($listPerguntasJSON))
        return $listPerguntasJSON;
    else
        return false;
}

?>