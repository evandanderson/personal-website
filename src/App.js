import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

import Home from './elements/Home';
import Projects from './elements/Projects';
import About from './elements/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/snake' element={<div>Snake game</div>} />
        <Route path='/projects/vibes' element={<div>Vibes</div>} />
        <Route path='/projects/wordle' element={<div>Wordle game</div>} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
