import { BrowserRouter } from 'react-router-dom'
import { About, Hero, Navbar, Experience, Contact, Feedbacks, Tech, Works } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Contact />
        <Feedbacks />
        {/* <Loader /> */}
        <Tech />
        <Works />
      </div>
    </BrowserRouter>
  );
}

  export default App