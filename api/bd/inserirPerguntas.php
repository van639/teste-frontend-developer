<?php
/******************************************************************************
        Objetivo: Inserir dados de Perguntas no Banco de Dados
        Data: 04/08/2022
        Autor: Vanderson
*******************************************************************************/

require_once(SRC.'bd/conexaoMysql.php');

function inserirPerguntas($arrayPerguntas)
{

    $sql = "insert into tbl_duvidas
    (
        nome,
        email,
        numero,
        pergunta
    )
    values
    (
        '".$arrayPerguntas['nome']."',
        '".$arrayPerguntas['email']."',
        '".$arrayPerguntas['numero']."',
        '".$arrayPerguntas['pergunta']."'
    )";

    $conexao = conexaoMysql();
        
    if (mysqli_query($conexao, $sql))
        return true; 
    else
        return false;
}

?>