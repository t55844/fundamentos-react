import React from "react";

export default function Familiares(props){
    return(
        <div>
            {props.nome} <strong style={{fontSize:"large"}}>{props.sobrenome}</strong>
        </div>
    )
}