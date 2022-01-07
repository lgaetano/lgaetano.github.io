import portfolioPic from './portfolioPic.jpg';
import './App.css';
import './components/ProjectList';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={portfolioPic} 
          className="App-logo" 
          alt="smiling computer programmer with short hair and glasses looks
              toward the camera." />
        <p>
          <code>Lia Gaetano</code> computer programmer.
        </p>
        <a
          className="App-link"
          href="portfolio"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
      </header>
      <main>
        <ProjectList id="portfolio"/>

      </main>
    </div>
  );
}

export default App;
