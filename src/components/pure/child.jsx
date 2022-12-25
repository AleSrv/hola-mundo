import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')


    function pressButton(){
        const text = messageRef.current.value;
        alert(`DESDE CHILD Text in input: ${text}`)
    }

    function pressButtonParams(text){
        alert(`Text: ${text}`)
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value)
    }

    return (
        <div style={{background: 'cyan', padding: '30px'}}>
            <p onMouseOver={()=> console.log('On Mouse Over')}> 
                Hola, {name} 
            </p>

            {/* BOTON 1 */}
            <button onClick={()=>console.log('Pressed button 1')}>
                Button 1
            </button>

            {/* BOTON 2 */}
            <button onClick={pressButton}>
                Button 2
            </button>

            {/* BOTON 3 */}
            <button onClick={()=>pressButtonParams('Hello')}>
                Button 3
            </button>

            {/* INPUT */}
            <input 
                placeholder= "Send a text to your father"
                onFocus={()=>console.log('Input Focused: ENTRO EN INPUT EL MOUSE')}
                onChange={(e)=> console.log('Input changed:', e.target.value)}
                onCopy={()=>console.log('Copied Text from imput')}
                ref= {messageRef}>
            </input>

            {/* BOTON ENVIAR MENSAJE */}
            <button onClick={()=> send (messageRef.current.value)}>
                Send Message 
            </button>

            {/* FORMULARIO */}
            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New Name'/>
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
