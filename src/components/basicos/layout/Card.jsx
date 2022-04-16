import React from "react";
import './Card.css'

export default function Card(props){
    const cardStyle = {
        backgroundColor : props.color || '#fff',
        borderColor : props.color || '#fff'
    }
    return(
        <div className="Card" style={cardStyle}>
            <div className="Conteudo">
                {props.children}
            </div>
            <div className="Footer">
                {props.titulo}
            </div>
        </div>
    )
}

