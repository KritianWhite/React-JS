/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef() -> referenciar elementos dentro de la vista
 * - useEffect() -> controla los cambios para la vista
 */

// Creamos un rfc

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    /**
     * Creamos contadores distintos, cada uno 
     * en un estado diferente
     */
    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);

    /**
     * Vamos a crear una referencia con useRef() para asociar una
     * variable con un elemento del DOM del componente (vista HTML)
     */

    const miRef = useRef();

    function incrementar1() {
        setContador(contador +1)
    }

    function incrementar2() {
        setContador2(contador2 +1)
    }

    /**
     * Trabajando con useEffect
     * 
     * 
     * ? Caso1: Ejecutar SIEMPRE un snippet de codigo
     * Cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que este dentro del useEffect()
     * 
     */

    /*useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')
        console.log('Mostrando referencia a elemento del DOM: ')
        console.log(miRef)
    })*/


    /**
     * ? Caso 2: ejecutar SOLO CUANDO CAMBIE CONTADOR1
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga 
     * el useEffect(). En caso de que cambie contador 2, no habra ejecución
     */

    /*useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1')
        console.log('Mostrando referencia a elemento del DOM: ')
        console.log(miRef)
    
    }, [contador]);*/

    /**
     * ? Caso 3: ejecutar SOLO CUANDO CAMBIE CONTADOR1 o CONTADOR2
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * Cada vez que haya un cambio en contador 2, se ejecuta lo que diga el useEffect()
     */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 o CONTADOR 2')
        console.log('Mostrando referencia a elemento del DOM: ')
        console.log(miRef)
    
    }, [contador, contador2]);
    

    return (
        <div>
            <h1> ***Ejemplo del useState(), useRef() y useEffect()***</h1>
            <h2>Contador1: { contador }</h2>
            <h2>Contador2: { contador2 }</h2>
            {/**Elemento refernciado */}
            <h3 ref={ miRef }> Ejemplo de elemento referenciado</h3>
            {/**Botones para cambiar los contadores */}
            <div>
                <button onClick={ incrementar1 }>Incrementar contador 1</button>
                <button onClick={ incrementar2 }>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
