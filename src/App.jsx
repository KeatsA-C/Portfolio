import "./App.css";
import DynamicRoleHeading from "./components/DynamicRoleHeading";
import MatrixText from "./components/MatrixText";
import Navigation from "./components/Navigation";

function App() {
  const roles = ["Developer", "Programmer", "Designer"];
  return (
    <div className="bg-neutral-900">
      <div className="flex justify-between p-5 text-white">
        <a href="">
          <MatrixText word="KEATS" />
        </a>
        <Navigation />
        <button className="border border-none bg-indigo-500 p-3 rounded-md text-white mr-3">
          Contact
        </button>
      </div>

      <div className="flex justify-between pt-9">
        <DynamicRoleHeading words={roles} />
        <div className="flex justify-center items-center w-1/3">
          <img src="./src/assets/mainp.png" alt="" />
        </div>
        {/* <div className="w-1/3">
          <p className="text-white  m-16">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            debitis quam fuga fugit rem corrupti dolor repellat maiores. Aliquid
            ea natus saepe quia ipsam optio illo iure dolores dolor voluptatem!
          </p>
        </div> */}
        <DynamicRoleHeading />
      </div>
      <hr className="m-10 border-t border-indigo-400"></hr>
      <div>
        <ul className=" text-white flex justify-around">
          <li>
            <h2 className=" text-2xl">Bootcamp</h2>
            <ul>
              <li>
                <h3>Front-End Fundamentals</h3>
              </li>
              <li>
                <h3>Data Analytics Fundamentals</h3>
              </li>
              <li>
                <h4>ONECODECAMP</h4>
              </li>
            </ul>
          </li>

          <li>
            <h2 className=" text-2xl">Seminar</h2>
            <div>
              <ul>
                <li>
                  <h3>Introduction to Machine Learning & Prompt Engineering</h3>
                </li>
                <li>
                  <h3>Introduction to Data Centers</h3>
                </li>
                <li>
                  <h4>GREYWOLF TECHNOLOGIES PHILIPPINES</h4>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li>
                  <h3>Human Mission: Behind Cybersecurity</h3>
                </li>
                <li>
                  <h3>CpE in Freelancing Industrys</h3>
                </li>
                <li>
                  <h4>ONECODECAMP</h4>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <h2 className=" text-2xl">Project</h2>
          </li>

          {/* <li>Front-End and Data-Analytics at OneCodeCamp</li>
          <li>
            Machine Learning & Prompt Engineering by GREYWOLF TECHNOLOGIES
            PHILIPPINES
          </li>
          <li>Data Centers by GREYWOLF TECHNOLOGIES PHILIPPINES</li> */}
        </ul>
      </div>
    </div>
  );
}

export default App;
