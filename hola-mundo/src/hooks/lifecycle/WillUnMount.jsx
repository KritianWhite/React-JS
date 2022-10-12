/**
 * Ejemplo de uso del metodo componentWillUnMount para componente clase
 * Ejemplo de uso del hook para componente funcional
 * (Cuando el componente va a desaparecer)
 * 
 */

import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('Compoirtamiento antes de que el comopnente desaparezca')
    }

  render() {
    return (
      <div>
        <h1>
            WILLUNMOUNT
        </h1>
      </div>
    )
  }
}

export const WillUnMountHook = () => {

    useEffect(() => {
        // aqui no ponemos nada si no en el return
        return () => {
            console.log('Compoirtamiento antes de que el comopnente desaparezca');
        };
    }, []); // Para que se ejecute una vez

    return (
      <div>
        <h1>
            WILLUNMOUNT
        </h1>
      </div>
    )
}