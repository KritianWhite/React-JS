import logo from './logo.svg';
import './App.css';
import Greeting from './Components/pure/greeting'; // LLamando nuestro componente tipo clase
import GreetingF from './Components/pure/greetingF'; // Llamando nuestro componente tipo funcion
import TaskListComponent from './Components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './Components/pure/greetingStyled';
import Father from './Components/container/father';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* Componente propio Greeting.jsx */}
        {/*<Greeting name="Christian :D"></Greeting>*/}

        {/** Componente de ejemplo funcional */}
        {/*<GreetingF name="Christian"></GreetingF>*/}

        {/**Componente del listado de tareas */}
        {/*<TaskListComponent></TaskListComponent>*/}
        {/*<Ejemplo1></Ejemplo1>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
        {/*<MiComponenteConContexto></MiComponenteConContexto>*/}

        {/*<Ejemplo4 name='Christian'>*/}
          {/**Todo lo que hay aqui adentro es tratado como props.children */}
          {/*<h3>*/}
            {/*Contenido del props.children*/}
          {/*</h3>*/}
        {/*</Ejemplo4>*/}
      
        {/*<GreetingStyled name="Christian"></GreetingStyled>*/}
      {/* </header> */}

      {/**Gestion de eventos */}
      <TaskListComponent></TaskListComponent>

      {/**Enviando desde el hijo al padre */}
      {/* {<Father></Father>} */}


    </div>
  );
}

export default App;
