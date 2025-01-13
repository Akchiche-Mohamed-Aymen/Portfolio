import "./App.css";
import FormContact from "./FormContact";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import Overview from "./Overview";
import Skills from "./Skills";
import Projects from "./Projects";
import Testimon from "./Testimon";
import Container from "./Container";
import {  Routes, Route  } from "react-router-dom";

function App() {
  return ( 
    <>      
    <NavBar/>
        <Routes>
    
        <Route path="/" element={<>
          <Container>
                  <HomePage/>
                  <Overview/>
                  <Skills/>
                  <Projects/>
                  <Testimon/>
          </Container>
              <FormContact />
        </>}/>
        <Route path="/About" element={<Container>
          <HomePage/>
          <Overview/>
          <Skills/>
          </Container>
        }/>
        <Route path="/Projects" element={
          <Container>
              <Projects/>
          </Container>  }/>
        <Route path="/contact" element={<Container><FormContact/></Container>}/>
        <Route path="/*" element={<Container> <h1 className="font-bold text-5xl text-white text-center mt-16">404 ... NOT Found</h1> </Container>}/>
      </Routes>
  </>
  );
}

export default App;
