import Header from "./components/Header";
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
}

export default App;
