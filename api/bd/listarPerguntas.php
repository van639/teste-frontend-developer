<?php
/******************************************************************************
        Objetivo: Arquivo responsavel por listar todos os dados de produtos no
         Banco de dados
        Data: 04/08/2022
        Autor: Vanderson
*******************************************************************************/

//Import do arquivo de conexão com o bd
require_once(SRC.'bd/conexaoMysql.php');


function listarPerguntas (){
    $sql = "select * from tbl_duvidas order by id_duvidas desc";

    $conexao = conexaoMysql();
    $select = mysqli_query($conexao, $sql);

    return $select;
}

?>

