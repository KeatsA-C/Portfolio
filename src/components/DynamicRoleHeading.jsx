import { useEffect, useState } from "react";

function DynamicRoleHeading({ words = [] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout;

    if (deleting) {
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1));
      }, 60);

      if (displayed === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayed(word.slice(0, displayed.length + 1));
      }, 100);

      if (displayed === word) {
        timeout = setTimeout(() => setDeleting(true), 1000); // pause before deleting
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <div className="text-white w-1/3 m-16 font-aldrich mt-32">
      <h1 className="text-5xl">
        I'm a <span className="text-indigo-500">{displayed}</span>
        <span
          className="inline-block w-2 bg-indigo-500 ml-1 animate-pulse"
          style={{ height: "1em", verticalAlign: "bottom" }}
        />
      </h1>
      <p className="text-xl pt-5 ">
        I am a Computer Engineering student aspiring to become a software
        developer. As a hobbyist, I actively perform hands-on projects to apply
        and expand my academic knowledge in real-world applications. To further
        enhance my skills, I regularly attend various training programs.
      </p>
    </div>
  );
}

export default DynamicRoleHeading;
