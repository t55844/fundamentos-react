import React from "react";
import'./App.css';
import ComFilhos from "./components/basicos/ComFilhos";
import ComParametro from "./components/basicos/ComParametro";
import DesafioNumeroAleatorio from "./components/basicos/DesafioNumeroAleatorio/DesafioNumeroAleatorio";
import Familha from "./components/basicos/Familha";
import Card from "./components/basicos/layout/Card";
import Primeiro from "./components/basicos/Primeiro";

export default function App(){
    return(
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="Familha" color="#E84A5F">
                <Familha
                sobrenome="Silva"/>
            </Card>
            <Card titulo="DesafioNumeroAleatorio" color="#355C7D">
                <DesafioNumeroAleatorio
                max={14}
                min={3}/>
            </Card>
            <Card titulo="DesafioNumeroAleatorio" color="#6C5B7B">
                <DesafioNumeroAleatorio
                max={14}
                min={3}/>
            </Card>
            <Card titulo="Primeiro" color="#C06C84">
                <Primeiro/>
            </Card>
            <Card titulo="ComParametro 1" color="#F67280">
                <ComParametro
                    titulo="porom"
                    subtitulo="pirim"
                />
            </Card>
            <Card titulo="ComParametro 2" color="#F8B195 ">
                <ComParametro
                    titulo="toma"
                    subtitulo="plau"
                />
            </Card>
            <Card titulo="ComFilhos" color="#2A363B">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Luis</li>
                        <li>Guto</li>
                        <li>Beto</li>
                        <li>Nina</li>
                    </ul>
                </ComFilhos>
            </Card>
        </div>
    </div>
    )
}