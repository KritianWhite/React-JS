/**
 * Ejemplo del uso de Hook useState
 *
 * La idea consiste en crear un componente de tipo funcion
 * y acceder a su estado privado a travez de un hook y, 
 * ademas, poder modificarlo
 *  
 */



// Creamos un RFC
import React, { useState } from 'react';

const Ejemplo1 = () => {

    // valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre: 'Christian',
        email: 'correojeje@ejemplo.com'
    }

    /**
     *  Queremos que el valorInicial y personaInicial sean parte
     *  del estado del componente para asi poder gestionar su 
     *  cambio y que este se vea reflejado en la vista del componente.
     * 
     * const [] nombreVariable, funcionäraCambiar ] = useState(valorInicial)
     */

    const [contador, setContador] = useState(valorInicial)
    const [persona, setPersona] = useState(personaInicial)

    /**
     *  Función para actualizar el estado privado que contiene el contador
     */

    function incrementarContador() {
        // ? funcionParaCambbiar(nuevoValor)
        setContador(contador + 1);
    }

    /**
     *  Función para actualizar el estado de la persona 
     */

    function actualizarPersona() {
        setPersona({
            nombre: 'Alessander',
            email: 'modificado_email@ejemplo.com'

        })
    }


    return (
        <div>
            <h1> ***Ejemplo del useState()***</h1>
            <h2>Contador: { contador }</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: { persona.nombre }</h3>
            <h4>EMAIL: { persona.email }</h4>
            {/**Bloque de botonoes para actualizar el estado del componente */}
            <button onClick={ incrementarContador }>Incrementar contador</button>
            <button onClick={ actualizarPersona }>Actualizar persona</button>
            
        </div>
    );
}

export default Ejemplo1;


