import { useState } from "react";

function Navigation() {
  const [active, setActive] = useState("about");

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact Information" },
  ];

  return (
    <ul className="flex pt-7">
      {navItems.map((item) => (
        <li key={item.id} className="px-3">
          <button
            onClick={() => setActive(item.id)}
            className={`font-aldrich transition duration-300 ${
              active === item.id ? "underline text-indigo-500" : "text-white"
            }`}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
