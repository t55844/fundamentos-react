import React, { Component } from "react";
import Botoes from "./Botoes";
import Display from "./Display";
import Passo from "./Passo";

export default class Contador extends React.Component{
    state={
        numero:this.props.numeroInicial || 0,
        passo:this.props.passo || 5
    }
    inc(){
        this.setState({
            numero:this.state.numero + this.state.passo
        })
    }
    dec(){
        this.setState({
            numero:this.state.numero - this.state.passo
        })
    }
    setPasso = (e)=>{
        this.setState({
            passo: +e.target.value
        })
    }

    render(){
        return(
            <>
               <Display
               numero={this.state.numero}
               />
               <Passo
               passo={this.state.passo} 
               setPasso={this.setPasso}
               />
                <Botoes
                    inc={this.inc.bind(this)}
                    dec={this.dec.bind(this)}
                />
            </>
        )
    }
}