import Splash from "./Main/Splash";
import About from "./Main/About";
import Nav from "./Main/Navigation/Nav";
import Three from "./Testing/THREE";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import "./App.css";

function App() {

  const darkTurq = {
    marginTop: "-550px",
    marginLeft: "-30px",
    zIndex: '300',
  };

  const seafoaml = {
    marginTop: "-332px",
    marginLeft: "35px",
  };

  const beige = {
    marginTop: "250px",
    marginLeft: "-60px",
  };

  const green = {
    marginTop: "-380px",
    marginLeft: "200px",
  };

  const darkBluel = {
    marginTop: "-220px",
    marginLeft: "150px",
  };

  const darkBlues = {
    marginTop: "200px",
    marginLeft: "20px",
  };

  const seafoams = {
    marginTop: "-30px",
    marginLeft: "60px",
  };

  const headshotStyles = {
    zIndex: "-100",
    marginLeft: '20px'
  };


  document.addEventListener('onscroll', () => {
      
  })


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Splash darkTurq={darkTurq} seafoaml={seafoaml} beige={beige} green={green} darkBluel={darkBluel} darkBlues={darkBlues} seafoams={seafoams} headshotStyles={headshotStyles} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
