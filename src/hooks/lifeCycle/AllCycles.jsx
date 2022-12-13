/**
 * Hacer un componente funcional para que tenga todo el ciclo
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
