import { useState, useEffect } from "react";
import MatrixText from "./components/MatrixText";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function Layout() {
  const [activeSection, setActiveSection] = useState("about");
  const [pageLoaded, setPageLoaded] = useState(false); // State to track page load

  useEffect(() => {
    // Trigger fade-in immediately after mount
    setTimeout(() => setPageLoaded(true), 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ${
        pageLoaded ? "opacity-100" : "opacity-0"
      } min-h-screen`}
    >
      {/* Main content */}
      <div className="bg-neutral-900 text-white p-5 justify-between items-center md:fixed top-0 lg:w-full z-50 bl flex">
        <a href="#about" className="">
          <MatrixText key={activeSection} word="KEATS" />
        </a>
        <Navigation activeSection={activeSection} />
        <button
          disabled
          className="hidden sm:block text-xs p-2 md:text-md font-aldrich border border-none bg-indigo-500 md:p-3 rounded-md text-white mr-3"
        >
          Send a Message
        </button>
      </div>

      <div className="md:pt-24">
        <div
          id="about"
          className={`transition-opacity duration-500 ease-in-out ${
            activeSection === "about"
              ? "opacity-100 relative"
              : "opacity-0 pointer-events-none top-0 left-0 w-full"
          }`}
        >
          <About />
        </div>

        <div
          id="projects"
          className={`transition-opacity duration-500 ${
            activeSection === "projects"
              ? "opacity-100 relative"
              : "opacity-0 pointer-events-none top-0 left-0 w-full"
          }`}
        >
          <Projects />
        </div>

        <div
          id="contact"
          className={`transition-opacity duration-500 ${
            activeSection === "contact"
              ? "opacity-100 relative"
              : "opacity-0 pointer-events-none top-0 left-0 w-full"
          }`}
        >
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Layout;
