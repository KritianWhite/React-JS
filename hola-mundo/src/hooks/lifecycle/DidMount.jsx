/**
 * Ejemplo de uso del metodo de ciclo de vida en componente clase 
 * y el hook de ciclo de vida
 * 
 * ? ================================
 * ?  TABLA PARA ENTENDER LIFECYCLE
 * ? =================================
 * 
 * ? METODO DE LIFECYCLE (TIPO CLASE)
 * - Introducido en versiones inciales
 * - Funciona con ES5
 * - Incorporado en componentes de clase
 * - Necesita de un constructor para inicializar
 * - Uso de THIS bindeado de la clase
 * 
 * 
 * ? METODO DE HOOK DE LIFECYCLE (TIPO HOOK)
 * - Introducido en 2018
 * - Funciona con >ES6
 * - Incoporado para componentes funcionales
 * - No necesita constructor
 * - No necesita THIS para ser usado
 * 
 */

import React, { Component, useEffect } from 'react'

export class Didmount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice')
    }

    render() {
        return (
            <div>
                <h1>
                    DIDMOUNT
                </h1>
            </div>
        )
    }
}

export const DidmountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice')
    }, []); // Los corchetes vacios indican que se renderice una vez

    return (
        <div>
            <h1>
                DIDMOUNT
            </h1>
        </div>
    )
}