import React from "react";

export default function DesafioNumeroAleatorio(props){
    const numeroAleatorio = Math.round(Math.random() * (props.max - props.min) + props.min);
    return(
        <div>
            {numeroAleatorio}
        </div>
    )
};