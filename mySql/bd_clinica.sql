create database dentista;

use dentista;

create table tbl_duvidas (
	id_duvidas int not null auto_increment primary key,
    nome varchar (150) not null,
    email varchar(200),
    numero int,
    pergunta text not null,
    
    unique index (id_duvidas)
)

select * from tbl_duvidas;
