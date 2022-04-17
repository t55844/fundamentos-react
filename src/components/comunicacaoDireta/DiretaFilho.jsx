import React from "react";

export default function DiretaFilho(props){
    return(
        <>
            <span>Nome:{props.nome}</span>
            <span> idade:{props.idade}</span>
            <span> é meu filho {props.dna?'Sim':'Nao'}</span><br></br>
        </>
    )
}