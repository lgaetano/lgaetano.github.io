import portfolioPic from './portfolioPic.jpg';
import { useState } from 'react';
import './App.css';
import './components/ProjectList';
import ProjectList from './components/ProjectList';

function App() {
  const [projects, setProjects] = useState([
    { title: "Inspiration Board", link: "https://github.com/lgaetano/front-end-inspiration-board"},
    { title: "Tic Tac Toe", link: "https://github.com/lgaetano/react-tic-tac-toe"},
    { title: "Weather App", link: "https://github.com/lgaetano/weather-report"},
    { title: "Retro Video Store API",  link: "https://github.com/lgaetano/retro-video-store"},
    { title: "Ada Capstone", link: "https://www.youtube.com/watch?v=pais41IW5dk&t=6s"},
  ])

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
        <ProjectList 
          id="portfolio"
          projects={projects}
          />

      </main>
    </div>
  );
}

export default App;
