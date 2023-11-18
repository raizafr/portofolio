import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Headroom from "react-headroom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Portofolio from "./components/Portofolio";
import Aboutme from "./components/Aboutme";
import Skill from "./components/Skill";
import "animate.css";
AOS.init({
  duration: 800,
});

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
