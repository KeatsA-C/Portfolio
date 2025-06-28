import { useEffect, useState } from "react";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";

function MatrixText({ word }) {
  const [displayed, setDisplayed] = useState(" ".repeat(word.length));
  const [doneTyping, setDoneTyping] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [hoverStates, setHoverStates] = useState({});
  const [cursorIndex, setCursorIndex] = useState(0);

  // Typing animation
  useEffect(() => {
    let i = 0;
    let phase = 0;
    let typed = "";

    const typeNext = () => {
      if (i >= word.length) {
        setDoneTyping(true);
        return;
      }

      const targetChar = word[i];

      switch (phase) {
        case 0: // wrong character
          typed += characters[Math.floor(Math.random() * characters.length)];
          setDisplayed(typed.padEnd(word.length, " "));
          setCursorIndex(i);
          phase = 1;
          break;

        case 1: // erase
          typed = typed.slice(0, -1) + " ";
          setDisplayed(typed.padEnd(word.length, " "));
          setCursorIndex(i);
          phase = 2;
          break;

        case 2: // correct character
          typed = typed.slice(0, -1) + targetChar;
          setDisplayed(typed.padEnd(word.length, " "));
          setCursorIndex(i + 1);
          i++;
          phase = 0;
          break;
      }
    };

    const intervalId = setInterval(typeNext, 120);
    return () => clearInterval(intervalId);
  }, [word]);

  // Cursor blinking
  useEffect(() => {
    let i = 0;
    let phase = 0;
    let typed = "";

    let timeoutId;

    const typeNext = () => {
      if (i >= word.length) {
        setDoneTyping(true);
        return;
      }

      const targetChar = word[i];

      switch (phase) {
        case 0: // wrong character
          typed += characters[Math.floor(Math.random() * characters.length)];
          setDisplayed(typed.padEnd(word.length, " "));
          setCursorIndex(i);
          phase = 1;
          timeoutId = setTimeout(typeNext, 100); // pause after wrong
          break;

        case 1: // erase (simulate backspace)
          typed = typed.slice(0, -1) + " ";
          setDisplayed(typed.padEnd(word.length, " "));
          setCursorIndex(i);
          phase = 2;
          timeoutId = setTimeout(typeNext, 250); // pause after erase
          break;

        case 2: // correct letter
          typed = typed.slice(0, -1) + targetChar;
          setDisplayed(typed.padEnd(word.length, " "));
          setCursorIndex(i + 1);
          i++;
          phase = 0;
          timeoutId = setTimeout(typeNext, 250); // pause after correct
          break;
      }
    };

    typeNext(); // start typing sequence

    return () => clearTimeout(timeoutId);
  }, [word]);

  // Hover effect logic
  const handleMouseEnter = (index) => {
    const originalChar = displayed[index];
    const flicker = setInterval(() => {
      setDisplayed(
        (prev) =>
          prev.substring(0, index) +
          (prev[index] === "_" ? originalChar : "_") +
          prev.substring(index + 1)
      );
    }, 200);

    setHoverStates((prev) => ({
      ...prev,
      [index]: flicker,
    }));
  };

  const handleMouseLeave = (index) => {
    clearInterval(hoverStates[index]);
    setDisplayed(
      (prev) =>
        prev.substring(0, index) + word[index] + prev.substring(index + 1)
    );
    setHoverStates((prev) => {
      const updated = { ...prev };
      delete updated[index];
      return updated;
    });
  };

  return (
    <h1 className="font-nico text-5xl pt-1 text-indigo-500 tracking-widest flex gap-1">
      {word.split("").map((letter, i) => (
        <span
          key={i}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={() => handleMouseLeave(i)}
          className="relative inline-block"
        >
          {/* Reserve layout with invisible letter */}
          <span className="invisible">{letter}</span>

          {/* Actual displayed character */}
          <span className="absolute left-0 top-0">{displayed[i]}</span>

          {/* Cursor (your original vertical bar style) */}
          {i === cursorIndex && !doneTyping && (
            <span
              className={`absolute left-full ml-1 w-[2px] bg-indigo-500 ${
                cursorVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ height: "1em", verticalAlign: "bottom" }}
            />
          )}
        </span>
      ))}
    </h1>
  );
}

export default MatrixText;
