/**
 * Ejemplo Ciclo de vida en componente clase
 * y Ciclo de vida en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes de que Componente sea añadido al DOM (renderice)')
    }

    render() {
        return (
            <div>
                <h1>DidMount Class</h1>
            </div>
        );
    }
}

export const DidMountHook = () => {
    //usamos useEffect(()=>{},[]); PARA REALIZAR UNA VEZ EL "DidMount"
    useEffect(() => {
        console.log('Comportamiento antes de que Componente sea añadido al DOM (renderice)')
    }, []); // los corchetes [] indican que solo se ejecuta una vez . Cuando renderiza.

    return (
        <div>
                <h1>DidMount Function</h1> 
        </div>
    );
}

export default DidMount;

