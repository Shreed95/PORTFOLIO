import Nav from "./Components/Nav";
import About from "./Components/About";
import Project from "./Components/Projects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
function App() {

  const [text] = useTypewriter({
    words: ["Web-Developer", "Competitive Programmer"],
    loop: {},
    typeSpeed: 120,
    delaySpeed: 80,
  });

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<About text={text} />}></Route>
          <Route exact path="/projects" element={<Project />}></Route>
          <Route exact path="/exp" element={<Experience />}></Route>
          <Route
            exact
            path="/contact"
            element={
              <Contact />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
