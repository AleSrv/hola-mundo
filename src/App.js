// !>> create-react-app hola-mundo
// !GENERA:
// !UNA CARPETA -> cd hola-mundo
// !UN SCRIPT START SERVIDOR (localhost:3000) -> npm start 
// ! Instalar Bootstrap -> npm i bootstrap / Luego ir a index.js e importar (debe ir arriba de Sass)
// ! Instalar SASS - npm i --save node--sass (--save para que se instale en dependencia Json)

import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/forms/greetingStyled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio Greeting.jsx*/}
        {/* <Greeting name="ALE"></Greeting> */}
        {/* COMPONENTE FUNCIONAL GREETING  */}
        {/* <GreetingF name="Alejanadro"></GreetingF> */}
        {/* COMPONENTE DE LISTADO DE TAREAS */}
        {/* <TaskListComponent></TaskListComponent>  */}
        {/*Ejemplo uso Hooks*/}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* Todo lo que hay aqui dentro es props.children  */}
        {/* <Ejemplo4 nombre='Ale'>
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        <GreetingStyled name='Alex'></GreetingStyled>
      </header>
    </div>
  );
}

export default App;
