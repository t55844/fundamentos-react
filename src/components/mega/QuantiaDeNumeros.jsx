import React from "react";

export default(props)=>{
    return(
        <>
            <label htmlFor="qtDeNumeros">Quantos nuemros</label>
            <input 
            type="number" 
            itemID="qtDeNumeros" 
            value={props.qtDeNumeros}
            onChange={props.onChange} 
            />
        </>

    )
}