import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>HELLO React</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Alexis TISSIER
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
