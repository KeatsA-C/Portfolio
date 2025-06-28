// components/Navigation.jsx
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

function Navigation() {
  const [active, setActive] = useState("about");

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <ul className="flex font-aldrich">
      {navItems.map((item) => (
        <li key={item.id} className="px-3">
          <ScrollLink
            to={item.id}
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            onSetActive={() => setActive(item.id)}
            className={`cursor-pointer text-xl transition duration-300 ${
              active === item.id ? "underline text-indigo-500" : "text-white"
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
