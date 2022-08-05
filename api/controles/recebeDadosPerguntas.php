<?php
/******************************************************************************************************************
    Objetivo: Arquivo resposável por receber dados da API (POST)
    Data:04/08/2022
    Autor:Vanderson 
******************************************************************************************************************/

//Import do arquivo de configuração
require_once ('./functions/config.php');
//Import do arquivo que vai inserir no banco de dados
require_once (SRC.'bd/inserirPerguntas.php');

function inserirPerguntasAPI($array)
{
    if(inserirPerguntas($array))
        return true;
    else
        return false;
}
?>