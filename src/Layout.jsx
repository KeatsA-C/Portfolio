// Layout.jsx
import MatrixText from "./components/MatrixText";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function Layout() {
  return (
    <>
      <div className="bg-neutral-900 text-white p-5 flex justify-between items-center fixed w-full z-50">
        <a href="#about" className="cursor-pointer">
          <MatrixText word="KEATS" />
        </a>
        <Navigation />
        <a
          href="#contact"
          className="font-aldrich border border-none bg-indigo-500 p-3 rounded-md text-white mr-3"
        >
          Contact
        </a>
      </div>

      <div className="pt-32">
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Layout;
