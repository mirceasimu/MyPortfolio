import './App.css';
import { NavBar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ImageMap} from './components/Projects/ImageMap';
import {PortfolioWebsite} from './components/Projects/PortfolioWebsite';
import { ProcessMining } from './components/Projects/ProcessMining';
import { LumosNox } from './components/Projects/LumosNox';
import { EcoSchool } from './components/Projects/EcoSchool';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route 
          element={<div>
                    <Banner />
                    <Skills />
                    <Projects />
                   </div>}
          path="/" 
          />
          <Route element={<ImageMap />} path="/imageMap" />
          <Route element={<PortfolioWebsite />} path="/portfolioWebsite" />
          <Route element={<ProcessMining />} path="/processMining" />
          <Route element={<LumosNox />} path="/lumosNox" />
          <Route element={<EcoSchool />} path="/ecoSchool" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
