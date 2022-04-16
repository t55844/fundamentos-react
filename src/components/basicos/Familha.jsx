import React from "react";
import Familiares from "./Familiares";

export default function Familha(props){
    return(
        <div >
            <Familiares
            nome="Ana"
            sobrenome={props.sobrenome}/>
            <Familiares
            nome="Luis"
            sobrenome={props.sobrenome}/>
            <Familiares
            nome="Braga"
            sobrenome={props.sobrenome}/>
        </div>
    )
}