import Header from "./components/header/Header";
import Home from "./components/landingPage/Home";
import './App.css';

function App() {

  const michaelsTitle = `Michael's Awesome Website`;

  return (
    <div>
      <Header 
        michaelsTitle={michaelsTitle} 
      />
      <Home />
    </div>
      
  );
}

export default App;
