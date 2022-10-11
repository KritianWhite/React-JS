import React, { Component } from 'react'; 
import PropTypes from 'prop-types'; // Sirve para especificar el tipo de dato que le estamos pasando
/**
 * 
 * COMPONENTE DE TIPO CLASE
 * 
 */

class Greeting extends Component {

    constructor(props){
        super(props);
        this.state = {
            age : 21
        }
    }

    render() { // Siempre tiene que ser un return dentro de parentesis, donde ira el html
        return ( // Solo puede ir div en un solo nivel, si no nos da error
            <div> 
                <h1>
                    ¡HOLAAAAA { this.props.name }!
                </h1>
                <h2>
                    Tu edad es: { this.state.age }
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }
        ))
    }

}


Greeting.propTypes = { // Son el contenido que le puedo pasar a un componente desde un comopnente de orden superior
    name: PropTypes.string,
};


export default Greeting;
