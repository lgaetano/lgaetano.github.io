import portfolioPic from './portfolioPic.jpg';
import { useState } from 'react';
import './App.css';
import './components/ProjectList';
import ProjectList from './components/ProjectList';
import About from './components/About'

function App() {
  const projects= [
    { 
      title: "Inspiration Board", 
      link: "https://lgaetano.github.io/front-end-inspiration-board/", 
      repo: "https://github.com/lgaetano/front-end-inspiration-board" 
    },
    { 
      title: "Tic Tac Toe", 
      link: "https://lgaetano.github.io/react-tic-tac-toe/",
      repo: "https://github.com/lgaetano/react-tic-tac-toe" 
    },
    { 
      title: "Retro Video Store API",  link: "https://github.com/lgaetano/retro-video-store"
    },
    { 
      title: "Ada Capstone", link: "https://www.youtube.com/watch?v=pais41IW5dk&t=6s"
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={portfolioPic} 
          className="App-logo" 
          alt="smiling computer programmer with short hair and glasses looks
              toward the camera." />
        <h1 id='name'>Lia Gaetano (she/her)</h1>
        <h1>Full-stack developer<br />Seattle, WA</h1>
        {/* <a
          className="App-link"
          href="portfolio"
          rel="noopener noreferrer"
        >
          Portfolio
        </a> */}
      </header>
      <main className="App-main">
        <About />
        <ProjectList 
          id="portfolio"
          projects={projects}
          />

      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
