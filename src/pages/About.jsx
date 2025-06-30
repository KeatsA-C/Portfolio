// pages/About.jsx
import DynamicRoleHeading from "../components/DynamicRoleHeading";
import VerticalTextSlider from "../components/VerticalTextSlider";

const roles = ["Developer", "Programmer", "Designer"];
const techStack = [
  "Laravel",
  "Flutter",
  "React",
  "Tailwind",
  "Figma",
  "Photoshop",
];

function About() {
  const handleContextMenu = (event) => {
    event.preventDefault(); // Prevent the default context menu
  };
  return (
    <section className="min-h-screen py-10 px-6 w-full">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <DynamicRoleHeading words={roles} />
        <div className="flex justify-center items-center md:w-1/3">
          <img
            src="/mainp.png"
            alt="Profile"
            onContextMenu={handleContextMenu}
          />
        </div>
        <VerticalTextSlider items={techStack} />
      </div>
      <hr className="m-8 border-t border-indigo-400" />
      <ul className="text-white flex flex-col md:flex-row justify-around font-aldrich">
        <li>
          <h2 className="text-2xl pb-2 text-indigo-500">Bootcamp</h2>
          <h4 className="my-2">ONECODECAMP</h4>
          <ul className="list-disc pl-5">
            <li>
              <h3>Front-End Fundamentals</h3>
            </li>
            <li>
              <h3>Data Analytics Fundamentals</h3>
            </li>
          </ul>
        </li>
        <hr className="m-10 border-t border-indigo-400" />
        <li>
          <h2 className="text-2xl pb-2 text-indigo-500">Seminar</h2>
          <div>
            <h4 className="my-2">GREYWOLF TECHNOLOGIES PHILIPPINES</h4>
            <ul className="list-disc pl-5">
              <li>
                <h3>Introduction to Machine Learning & Prompt Engineering</h3>
              </li>
              <li>
                <h3>Introduction to Data Centers</h3>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="my-2">
              ASSOCIATION OF COMPUTER ENGINEERING STUDENTS
            </h4>
            <ul className="list-disc pl-5">
              <li>
                <h3>Human Mission: Behind Cybersecurity</h3>
              </li>
              <li>
                <h3>CpE in Freelancing Industrys</h3>
              </li>
            </ul>
          </div>
        </li>
        <hr className="m-10 border-t border-indigo-400" />
        <li>
          <h2 className="text-2xl pb-2 text-indigo-500">Project</h2>
          <h4 className="my-2">WEB</h4>
          <ul className="list-disc pl-5">
            <li>
              <h3>To-do App(Laravel)</h3>
            </li>
            <li>
              <h3>Laptop-Shop(Laravel)</h3>
            </li>
            <li>
              <h3>Dark-Flix(HTML+CSS)</h3>
            </li>
            <li>
              <h3>OS GUI(HTML+CSS+JavaScript)</h3>
            </li>
          </ul>
          <h4 className="my-2">MOBILE</h4>
          <ul className="list-disc pl-5">
            <li>
              <h3>Tech Connect(Flutter)</h3>
            </li>
          </ul>
        </li>
      </ul>
      <hr className="m-10 border-t border-indigo-400" />
    </section>
  );
}

export default About;
