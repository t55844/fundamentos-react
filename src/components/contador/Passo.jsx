import React from "react";

export default(props)=>{
    return(
        <div>
            <label htmlFor="Passo">Passo</label>
            <input 
            type="number" 
            itemID="Passo" 
            value={props.passo}
            onChange={props.setPasso} />
        </div>
    )
}