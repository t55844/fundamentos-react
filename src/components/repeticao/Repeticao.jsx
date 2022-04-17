import React from "react";

export default function Repeticao(props){
    const lis = props.alunos.map(aluno=>{
        return <li key={aluno.id}>{aluno.id}) {aluno.nome} {aluno.nota} </li>
    })
    return(
        lis
    )
}