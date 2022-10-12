import logo from './logo.svg';
import './App.css';
import Greeting from './Components/pure/greeting'; // LLamando nuestro componente tipo clase
import GreetingF from './Components/pure/greetingF'; // Llamando nuestro componente tipo funcion
import TaskListComponent from './Components/container/task_list';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx */}
        {/*<Greeting name="Christian :D"></Greeting>*/}
        {/** Componente de ejemplo funcional */}
        {/*<GreetingF name="Christian"></GreetingF>*/}
        {/**Componente del listado de tareas */}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
