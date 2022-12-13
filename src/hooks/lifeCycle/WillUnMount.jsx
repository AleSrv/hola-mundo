/***
 * Ejemplo de componentWillUnMount para Clase y Funcional
 * Cuando componente va a desaparecer
 */

import React, { Component, useEffect } from 'react'

export default class WillUnMount extends Component {

componentWillUnmount(){
    console.log('Comportamiento antes de que Componente desaparezca')
}

  render() {
    return (
      <div>WillUnMount Clase</div>  
    )
  }
}

export const WillUnMountHook = () => {

    useEffect(() => {
        //Aqui no ponemos nada. Va en el 'return'
        return () => {
            console.log('Comportamiento antes de que Componente desaparezca')
        };
    }, []); // Se ejecuta solo muna vez dejamos [] corchetes vacios

    return (
        <div>
      <div>WillUnMount Funcion</div>
        </div>
    );
}
