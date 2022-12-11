// >> create-react-app hola-mundo
// GENERA:
// UNA CARPETA -> cd hola-mundo
// UN SCRIPT START SERVIDOR (localhost:3000) -> npm start 

import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';

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
        <TaskListComponent></TaskListComponent> 
      </header>
    </div>
  );
}

export default App;
