import React, { Component } from 'react';
import PropTypes from 'prop-types';

// rcc para generar componente (elegimos la que tiene propTypes)
// rfc para generar componente funcional (elegimos la que tiene propTypes)


class Greeting extends Component {

    constructor(props){
        super(props);
        this.state = {
           age : 29
        }
    }

    render() {
        return (
            <div>
                <h1>
                    ¡HOLA { this.props.name } !
                </h1>
                <h2>
                    Tu edad es de: { this.state.age }
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
                age: prevState.age +1
            }
        ))
    }


}


Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
