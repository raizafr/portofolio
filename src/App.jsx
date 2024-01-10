import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portofolio from "./components/Portofolio";
import Aboutme from "./components/Aboutme";
import Skill from "./components/Skill";
import "animate.css";

function App() {
  return (
    <>
      <div className="px-3">
        <Navbar />
        <Aboutme />
        <Skill />
        <Portofolio />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
