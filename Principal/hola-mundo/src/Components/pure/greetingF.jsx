import React, { useState } from 'react';
import PropTypes from 'prop-types';
/**
 * 
 *  COMPONENTE FUNCIONAL
 * 
 */

const GreetingF = (props) => {
    
    // Breve introduccion de useState
    // const [Variable, metodo para actualizarlo] = useState(valor inicial)
    const [age, setage] = useState(21);

    const birthday = () => {
        // Este metodo se encarga de actualizar el state
        setage(age + 1);

    }


    return (
        <div>
            <h1>
                ¡HOLAAAAA {props.name} desde componente funcional!
            </h1>
            <h2>
                Tu edad es: { age }
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name : PropTypes.string
};


export default GreetingF;
