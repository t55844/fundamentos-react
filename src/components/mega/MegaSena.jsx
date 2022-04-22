import React, { useState } from "react";
import Display from "../contador/Display";
import GeradorDeNumeros from "./GeradorDeNumeros";
import QuantiaDeNumeros from "./QuantiaDeNumeros";

export default()=>{
    const[resultado,setResultado] = useState()
    const[numeros,setNumerosMega] = useState()
    function numeroMega(qt){
        setNumerosMega(qt)    
    }
    function mostraResultado(){
        setResultado(GeradorDeNumeros(numeros))
    }
   
    return(
        <>
            <Display
            numero={resultado}/>
            <QuantiaDeNumeros
                value={numeros}
                onChange={numeroMega}
            />
            <button onClick={mostraResultado}>Gerar</button>
        </>

    )
}