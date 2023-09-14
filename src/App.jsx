import { BrowserRouter } from "react-router-dom";
import './index.css'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech,  StarsCanvas } from "./components";
import Skill from "./components/Skills";
import Projects from "./components/Project";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          {/* <StarsCanvas /> */}

        </div>
        <About />
        <Skill/>
        <Experience />
        {/* <Tech /> */}
        <Projects />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
