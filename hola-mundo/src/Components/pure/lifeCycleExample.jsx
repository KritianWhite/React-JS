/**
 * Ejemplo de componente de tipo clase que dispone de los 
 * metodos de ciclo de vida
 */

import React, { Component } from "react";
import PropTypes from 'prop-types'

// Creamos un rcfc

class LifeCycleExample extends Component{

    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }
    
    componentWillMount(){
        console.log('WILLMOUNT: antes del montaje del componente')
    }

    componentDidMount(){
        console.log('DIDMOUNT: Justo al del montaje del componente, antes de renderizarlo')
    }

    componentWillReceiveProps(nextProps){
        console.log('WILLRECEIVE: Si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState){
        /**
         * Controlar si el componente debe o no actualizarse
         */
        // reurn true / false
    }
    
    componentWillUpdate(nextProps, nextState){
        console.log('WILLUpdate: Justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState){
        console.log('DIDUpdate: Justo despues de actualizarse')
    }

    componentWillUnmount(){
        console.log('WILLUnmount: Justo antes de desaparecer')
    }

    render(){
        return (
            <div>

            </div>
        )
    }

}

LifeCycleExample.protoTypes = {

}

export default LifeCycleExample;