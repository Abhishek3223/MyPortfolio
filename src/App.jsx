import { BrowserRouter } from "react-router-dom";
import './index.css'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Skill from "./components/Skills";

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
        {/* <Experience /> */}
        {/* <Tech /> */}
        <Works />
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
