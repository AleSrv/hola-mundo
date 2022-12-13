/*
*   Ejemplo de:
* - useState()  / CAMBIAR VALORES PRIVADOS EN COMPONENTES FUNCION
* - useRef()    / IDENTIFICAR ELEMENTOS DENTRO DE LA VISTA
* - useEffect() / CONTROLAR CAMBIOS EN LA  VISTA
*/

import React, { useState, useRef , useEffect } from 'react';

const Ejemplo2 = () => {

    //Dos contadores distindos en estados diferentes
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //vamos a crear una referencia con useRef() para asociar una variable
    //con un elemento del DOM del componente (vista html)
    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 +1)
    }

    function incrementar2(){
        setContador2(contador2 +1)
    }

    /*
    *   TRABAJAR CON useEffect()
    */
    /*********** */
    /*CASO 1 : Ejecutar SIEMPRE un snippet de código
    * Cada vez que hay cambio en estado del componente se
    * ejecuta lo que esta dentro del useEffect()
    **************/

    // useEffect(() => {
    //    console.log("CAMBIO EN EL ESTADO DEL COMPONENTE")
    //    console.log('Mostrando Referencia a Elemento del DOM:')
    //    console.log(miRef)
    // })

    // /*********** */
    // /*CASO 2 : Ejecutar SOLO CUANDO CAMBIE CONTADOR 1
    // * Cada vez que hay cambio en estado del CONTADOR 1 se
    // * ejecuta lo que esta dentro del useEffect()
    // **************/

    //     useEffect(() => {
    //    console.log("CAMBIO EN EL ESTADO DEL CONTADOR 1")
    //    console.log('Mostrando Referencia a Elemento del DOM:')
    //    console.log(miRef)
    // }, [contador1])


        /*********** */
    /*CASO 2 : EjecutarvCUANDO CAMBIE CONTADOR 1 o CONTADOR 2
    * Cada vez que hay cambio en estado del CONTADOR 1 
    * Cada vez que hay cambio en estado del CONTADOR 2
    * SE ejecuta lo que esta dentro del useEffect()
    **************/

    useEffect(() => {
        console.log("CAMBIO EN EL ESTADO DEL CONTADOR 1/CONTADOR 2")
        console.log('Mostrando Referencia a Elemento del DOM:')
        console.log(miRef)
     }, [contador1,contador2])

    return (
        <div>
                        <h1>*** Ejemplo de useState(), useRef(), useEffect() ***</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/* Elemento Referenciado */}
            <h4 ref={miRef}>
                Ejemplo de Elemento Referenciado
            </h4>
            {/*Bloque de botones para actualizar estado del componente*/}
            <div>
                <button onClick={incrementar1}>incrementar 1</button>
                <button onClick={incrementar2}>incrementar 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
