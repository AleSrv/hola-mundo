/* NOS PERMITE TRABAJAR CON EL ESTADO DE UN COMP DE ORDER SUPERIOR 
/  Y PASAR A LOS COMPONENTES INFERIORES
*Ejemplo Hooks
* - useSate()
* - useContext()
*/

import React,{ useState, useContext } from 'react';

/*
* @returns Componente1
* dispone de un contexto que va a tener un valor 
* que recibe desde el padre
*/


const miContexto = React.createContext(null)

const Componente1 = () => {

    // Inicializamos un estado vacio que va  
    // a rellenarse con los datos del padre

    const state = useContext(miContexto)

    return (
        <div>
            <h1>
                El Token es : { state.token }
            </h1>
            {/* Pintamos componente2 */}
            <Componente2></Componente2>
        </div>
    );
}


const Componente2 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h2>
                La sesion es: {state.session}
            </h2>
        </div>
    );
}


export default function MiComponenteConContexto() {

const estadoInicial = {
    token: '1234567',
    session: 1,
}

//Creamos estado de este Componente

const [sessionData, setSessionData] = useState(estadoInicial);

//funcion para ACTIALIZAR nuevos valores

function actualizarSession(){
    setSessionData(
        {
            token: 'JWT123456789',
            session: sessionData.session +1
        }
    );
}

  return (
    <miContexto.Provider value={sessionData}>
            {/* Todo lo que esta aqui dentro puede leer sessionData  */}
    {/* Ademas si se actualiza los componentes de aquí, tambien lo acrtualizan */}
    <h1>*** Ejemplo de useSate() y useContext() ***</h1>
    <Componente1></Componente1>
    <button onClick={ actualizarSession }>actualizar Sesion</button>
    </miContexto.Provider>
  )
}

