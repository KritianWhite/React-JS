import logo from './logo.svg';
import './App.css';
import Greeting from './Components/pure/greeting';
import GreetingF from './Components/pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx */}
        {/*<Greeting name="Christian :D"></Greeting>*/}
        <GreetingF name="Christian"></GreetingF>

      </header>
    </div>
  );
}

export default App;
