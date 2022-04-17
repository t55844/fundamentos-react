import React, { useState } from "react";
import IndiretaFilho from "./indiretaFilho";

export default function IndiretaPai(props){
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [dna, setDna] = useState(false)
    
    function atualizaInfo(nome,idade, dna){
        setNome(nome)
        setIdade(idade)
        setDna(dna)
    }
    
    return(
        <div>
            <div>
                <span>Nome:{nome}</span>
                <span> Idade:{idade} </span>
                <span>é meu filho:{dna?'Sim':'Nao'}</span>
            </div>
            <IndiretaFilho quandoClicar={atualizaInfo}></IndiretaFilho>
        </div>
    )
}