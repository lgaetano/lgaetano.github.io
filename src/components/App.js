import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Landing from './Landing';
import Navigation from './Navigation';
import ProjectList from './ProjectList';
import About from './About';
import './stylesheets/App.css';
import './ProjectList';

function App() {
  const projects = [
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

  const history = createBrowserHistory();

  return (
    <Router basename='/' history={history}>
      <div className="App">

        <Navigation />

        <main className="App-main">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" 
              element={<ProjectList />} 
              id="portfolio"
              projects={projects}
            />
          </Routes>

        </main>
      </div>
    </Router>
  );
}

export default App;
