/**
 * Ejemplo de ComponentDidUpDate() en clase
 * y uso de Hook en componente Funcional
 */

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

componentDidUpdate(){
    console.log('Comportamiento cuando Componente recibe nuevas Props o cambio en su estado')
}

  render() {
    return (
      <div>DidUpdate Class</div>
    )
  }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando Componente recibe nuevas Props o cambio en su estado')
    });// QUITAMOS EL [CORCHETE] PARA QUE SE EJECUTE SIEMPRE

    return (
        <div>
      <div>DidUpdate Function</div>
        </div>
    );
}

