import React from "react";
import'./App.css';
import ComFilhos from "./components/basicos/ComFilhos";
import ComParametro from "./components/basicos/ComParametro";
import DesafioNumeroAleatorio from "./components/basicos/DesafioNumeroAleatorio/DesafioNumeroAleatorio";
import Familha from "./components/basicos/Familha";
import Familiares from "./components/basicos/Familiares";
import Card from "./components/basicos/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import DiretaPai from "./components/comunicacaoDireta/DiretaPai";
import IndiretaPai from "./components/comunicacaoIndireta/IndiretaPai";
import RenderizacaoSimples from "./components/condicional/RenderizacaoCondicional";
import Repeticao from "./components/repeticao/Repeticao";
import RepeticaoTabela from "./components/repeticao/RepeticaoTabela";
import {alunos} from "./data/alunos";
import { produtos } from "./data/produtos";

export default function App(){
    return(
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="ComunicacaoIndireta" color="#DCEDC2">
               <IndiretaPai/>
            </Card>
            <Card titulo="ComunicacaoDireta" color="#FFD3B5">
               <DiretaPai>
               </DiretaPai>
            </Card>
            <Card titulo="RenderizacaoSimples" color="#FF8C94">
               <RenderizacaoSimples numero={Math.round(Math.random([1,10]))}>
               </RenderizacaoSimples>
            </Card>
            <Card titulo="RepeticaoTabela" color="#99B898">
                <RepeticaoTabela produtos={produtos}>
                </RepeticaoTabela>
            </Card>
            <Card titulo="Repeticao" color="#FECEAB">
                <Repeticao
                alunos={alunos}>  
                </Repeticao>
            </Card>
            <Card titulo="Familha" color="#E84A5F">
                <Familha sobrenome="Silva">
                    <Familiares
                    nome="Ana"/>
                    <Familiares
                    nome="Luis"/>
                    <Familiares
                    nome="Braga"/>
                </Familha>
            </Card>
            <Card titulo="Familha" color="#FF847C">
                <Familha sobrenome="Vieira">
                    <Familiares
                    nome="Ana"/>
                    <Familiares
                    nome="Luis"/>
                    <Familiares
                    nome="Braga"/>
                </Familha>
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