import React, { useState } from 'react';
import Child from '../child';

const Father = () => {

    const [name, setName] = useState('Martin');

    function showMessage(text){
        alert(`FATHER DICE: Message recived FROM CHILD; ${text}`)
    }
    
    function updateName (newName){
        setName (newName)
    }

    return (
        <div style={{background: 'tomato', padding: '10px'}}>
            <Child name={name} send={showMessage} update={updateName}></Child> 
            {/***! con CTR + SPACE sale funcion send****/}
        </div>
    );
}

export default Father;
