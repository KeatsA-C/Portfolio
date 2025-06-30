// components/Navigation.jsx
import { Link as ScrollLink } from "react-scroll";

function Navigation({ activeSection }) {
  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <ul className="hidden md:flex font-aldrich">
      {navItems.map((item) => (
        <li key={item.id} className="px-3">
          <ScrollLink
            to={item.id}
            smooth={true}
            duration={250}
            offset={-100}
            spy={true}
            onSetActive={() => {}}
            className={`cursor-pointer text-xl transition duration-300 ${
              activeSection === item.id
                ? "underline text-indigo-500"
                : "text-white"
            }`}
          >
            {item.label}
          </ScrollLink>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
