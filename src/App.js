import Container from './components/layout/Container/Container'
import Navbar from './components/layout/Navbar/Navbar'

import Home from './components/pages/Home/Home'
import AboutMe from './components/pages/AboutMe/AboutMe'
import Portfolio from './components/pages/Portfolio/Portfolio'
import Skills from './components/pages/Skills/Skills'
import Contact from './components/pages/Contact/Contact'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutme" element={<AboutMe />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
    
  );
}

export default App;
