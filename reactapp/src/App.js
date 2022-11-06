import Header from "./components/Header";
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header 
        linkText="Learn React"
        linkUrl="https://reactjs.org"
      />
    </div>
  );
}

export default App;
