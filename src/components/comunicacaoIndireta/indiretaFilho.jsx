import React from "react";

export default function IndiretaFilho(props){
    const cb = props.quandoClicar
    const geraIdade = ()=> parseInt(Math.random() *(20)) +50
    const geraDna = ()=> Math.random() > 0.5
    return(
        <div>
            <div></div>
            <button onClick={_=>cb('Joao',geraIdade(),geraDna())}
            >Atualiza Info</button>
        </div>
    )
}