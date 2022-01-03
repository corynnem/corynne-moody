import Splash from "./Main/Splash";
import About from "./Main/About";
import Nav from "./Main/Navigation/Nav";
import Three from "./Testing/THREE";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import "./App.css";

function App() {

  const darkTurq = {
    marginTop: "-508px",
    marginLeft: "-30px",
    zIndex: '300',
    // margin: 'auto'
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
    marginTop: "-200px",
    marginLeft: "200px",
  };

  const darkBlues = {
    marginTop: "150px",
    marginLeft: "20px",
  };

  const seafoams = {
    marginTop: "-40px",
    marginLeft: "70px",
  };

  const headshotStyles = {
    zIndex: "-100",
  };


  document.addEventListener('onscroll', () => {
      
  })


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Splash darkTurq={darkTurq} seafoaml={seafoaml} beige={beige} green={green} darkBluel={darkBluel} darkBlues={darkBlues} seafoams={seafoams} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
