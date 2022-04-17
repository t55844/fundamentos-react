import React from "react";
import DiretaFilho from "./DiretaFilho";

export default function DiretaPai(){
    return(
        <>
            <DiretaFilho 
            nome="Julio" idade={26} dna={false}>
            </DiretaFilho>
            <DiretaFilho 
            nome="Ana" idade={13} dna={true}>
            </DiretaFilho>
        </>
        
    )
}