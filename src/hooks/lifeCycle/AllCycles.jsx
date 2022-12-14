/**
 * Hacer un componente funcional para que tenga todo el ciclo
 * 
 *  -useState: permite almacenar y actualizar el estado de un componente de función.
 *  -useEffect: permite ejecutar código en un momento específico del ciclo de vida de
 *   un componente, como después de que se haya renderizado en la pantalla.
 *  -useContext: permite acceder al valor del contexto de React desde un componente de función.
 *  -useReducer: permite manejar el estado de un componente de una manera similar a useState,
 *   pero es más adecuado para casos de uso complejos que involucren muchas actualizaciones del estado.
 *  -useRef: permite crear una referencia mutable a un elemento del DOM o a un valor en el estado de
 *   un componente.
 */

import React, {useEffect} from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log('Componente Creado')

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('Actualizacion de Componente')
        },1000);

        return () => {
            console.log('Componente va a desaparecer')
            document.title = 'Tiempo Detenido'
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
