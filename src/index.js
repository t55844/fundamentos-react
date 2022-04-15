import React from "react";
import ReactDOM from "react-dom";
import ComFilhos from "./components/ComFilhos";
import ComParametro from "./components/ComParametro";
import Card from "./components/layout/Card";
import Primeiro from "./components/Primeiro";
import './index.css'

ReactDOM.render(
    <div>
        <Card titulo="Primeiro">
            <Primeiro/>
        </Card>
        <Card titulo="ComParametro 1">
            <ComParametro
                titulo="porom"
                subtitulo="pirim"
            />
        </Card>
        <Card titulo="ComParametro 2">
            <ComParametro
                titulo="toma"
                subtitulo="plau"
            />
        </Card>
        <Card titulo="ComFilhos">
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
       
        
    </div>,
    document.getElementById('root')
)