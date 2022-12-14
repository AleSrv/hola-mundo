
import React, { useState } from 'react';

// Definiendo estilos en constantes:

//Estilo si Usuario esta logueado
const loggedStyle = {
    color: 'white'
}


//Estilo si Usuario esta NO logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold' // fontWeight -> no se escribe font-Weight como css
}


const GreetingStyled = (props) => {

    //Generamos un estado para el componente
    // y asi  controlar si el usuario esta logueado o no
    
    const [logged, setLogged] = useState(false);
    const greetingUser = ()=> (<p> Hola {props.name}</p>) 
    const pleaseLogin = () => (<p> Please Login</p>)

    return (
        <div style={ logged ? loggedStyle : unloggedStyle}>
            { logged ? 
                greetingUser()
                : 
                pleaseLogin()
            }
            <button onClick={()=>{
                console.log('Boton Pulsado');
                setLogged(!logged);
            }}>
                { logged ? 'Logout': 'Login'  }
            </button>
        </div>
    );
}

export default GreetingStyled;
