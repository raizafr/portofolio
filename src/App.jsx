import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Headroom from "react-headroom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Portofolio from "./components/Portofolio";
AOS.init({
  duration: 800,
});

function App() {
  return (
    <>
      <div className="px-3">
        <Navbar />
        <About />
        <Skills />
        <Portofolio />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
