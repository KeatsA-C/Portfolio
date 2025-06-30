import { useEffect, useState } from "react";

export default function VerticalTextSlider({ items = [], duration = 2500 }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true); // true: fade in, false: fade out

  useEffect(() => {
    if (items.length === 0) return;

    let fadeOutTimer = setTimeout(() => setFade(false), duration - 800); // start fade-out before switching
    let switchTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % items.length);
      setFade(true); // reset to fade-in
    }, duration);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(switchTimer);
    };
  }, [index, duration, items.length]);

  return (
    <div className="w-full lg:w-1/3 m-16 font-aldrich text-white mt-32">
      {/* Fancy Word Slider */}
      <div className="h-[3.2rem] overflow-hidden text-5xl text-indigo-500 relative mt-4 mb-4">
        <div
          key={index}
          className={`absolute transition-all duration-700 ease-in-out
        ${fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}
      `}
        >
          {items[index]}
        </div>
      </div>
      <p className="text-xl">
        Through exposure to the latest tech and AI tools, I deliver solutions
        that efficiently solve challenges and scale with your needs. My goal is
        to ensure your projects are handled quickly, reliably, and in a way that
        can adapt to future demands.
      </p>
    </div>
  );
}
