import logo from './logo.svg';
import './App.css';

const testFetch = () => {
  fetch('https://warm-crisp-3aa44e.netlify.app/.netlify/functions/temp')
    .then((res) => (res.json()))
    .then((json) => (console.log(json)));
};

function App() {
  testFetch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
