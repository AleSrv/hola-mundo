// rfc para generar componente funcional (elegimos la que tiene propTypes)

import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    //Breve intro a useState (permite crear un stado privado)
    //const [variable, metodo actualizar set] = useState(valor inicial);
    const [age, setage] = useState(29);

    const birthday = () =>{
        //actualizar
        setage(age + 1)
    }

    return (
        <div>
        <h1>
            ¡HOLA {props.name } desde Componente Funcional!
        </h1>
        <h2>
            Tu edad es de: { age }
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
    name: PropTypes.string,
};


export default GreetingF;
