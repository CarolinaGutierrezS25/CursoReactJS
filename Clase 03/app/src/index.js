// 1) Tener la variable React en scope
import React from "react"
// 2) Tener la variable ReactDOM en scope
import ReactDOM from "react-dom"

// 3) Tener un elemento de react
//const a = <p>Hola Mundo</p>
// 3) Tener un elemento de React Componente
import App from "./App"
import "./css/style.css"

// 4) Tener una función render corriendo
ReactDOM.render(<App/>, document.querySelector("#root"));
//Con querySelector puedes traer elementos segun css por id, clase, etc.
//ReactDOM.render(a, document.getElementById("root"));

/* 
Importar JS
    CommonJS (Sintaxis Antigua)
        var x = require('x');
        var x = require('./x');
        module.exports = {}
    ES6 (Sintaxis Actual)
        import x from 'x';
        import x from './x';
        export default {}
        export const x = {}

VIRTUAL DOM : Es la representacion de una app de React en forma de objeto. 
    Cada parte del DOM se representa como una fibra/nodo. Los nodos más populares son Elementos de React,
    estos se separan en dos categorias.

Sintaxis JSX: Javascript and XML


REACT :
    1) Todos los componentes de React son funciones. 
        function componente(){}
        const componente = () => {}
        class componente{}
    2) Todos los componentes de React tienen retorno
        function componente(){
            return ?
        }
        const componente = () => {
            return ?
        }
        class componente{
        }
    3) Todos los componentes React empiezan con mayuscula
        function Componente(){
            return ?
        }
        const Componente = () => {
            return ?
        }
        class Componente{
        }
    4) Todos los componentes React se usan/ejecutan en JSX
        Componente() //NO
        <Componente/> //SI
        <Componente><Componente/> //SI
        Parametros: 
            Componente("Caro")
            <Componente nombre="Caro"/> //SI


 */
