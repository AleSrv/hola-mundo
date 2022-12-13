/***
 * Ejemplo compomnente con CICLOS DE VIDA
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class lifeCycleExample extends Component {
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }

    componentWillMount() {
        console.log('WillMount: antes del montaje del componente')

    }

    componentDidMount() {
        console.log('DidMount: Justo al montaje del componente, antes de renderizarlo(pintarlo)')

    }

    componentWillReceiveProps(nextProps) {
        console.log('ReceiveProps: Si va a recibir nuevas Props')
    }

    shouldComponentUpdate(nextProps, nextState) {
        /***
         * Controla si el componente debe o no actualizarse
         * retorna true / false
         **/
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: Justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: Justo al actualizarse')
        
    }

    componentWillUnmount() {
        console.log('WillUnmount: Justo antes de desaparecer')
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

componentName.propTypes = {

}

export default componentName