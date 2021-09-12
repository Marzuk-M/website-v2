// import './App.css';
import ControlBar from './components/controlBar';
import Canvas from './components/canvas';

function App() {
  return (
    <div style={{display: "flex", margin: 0, padding: 0}}>
      {/* <header className="App-header">
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
      </header> */}
      <ControlBar />
      <Canvas />
    </div>
  );
}

export default App;
