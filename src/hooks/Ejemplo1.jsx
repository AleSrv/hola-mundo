/*
* Hook useState
*/
/*Crear componente tipo funcion y acceder a su estado privado a 
traves de hook useState y ademas poder modificarlo*/

import React, { useState } from 'react';

const Ejemplo1 = () => {

    //valor inicial para un contador
    const valorInicial = 0;
    
    //valor inicial para un persona
    const personaInicial = {
        nombre: 'Martin',
        email: 'martin@imaginagroup.com'
    }
    

    //Queremos q valor inicial y personainicial sean parte
    //del componente para poder hacer un cambio y se 
    //vea reflejado en el componente

    //const [nombreVariable,funcionParaCambiar]= useState(valorInicial)
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /*
    *Funcion para aumentar el estado privado de contador
    */
    function incrementarContador (){
        setContador(contador+1);
    }

      /*
    *Funcion para aumentar el estado privado de persona
    */
    function actualizarPersona (){
        setPersona(
            {
                nombre: 'Alejandro',
                email:'cucaracha@gmail.com'
            }
        );
    }



    return (
        <div>
            <h1>***Ejemplo de useState()***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h4>Email: {persona.email}</h4>
            {/*Bloque de botones para actualizar estado del componente*/}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;

