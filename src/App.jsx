import About from "./components/About"
import Experiencies from "./components/Experiencies"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Portifolio from "./components/Portifolio"
import SocialLinks from "./components/SocialLinks"


function App() {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <Home />
      <About />
      <Portifolio />
      <Experiencies />

      <SocialLinks />
    </div>
  )
}

export default App
