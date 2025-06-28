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
    <div className="w-1/3 m-16 font-aldrich text-white mt-32">
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
        With a deep understanding of advanced tools, I provide solutions that
        are not only efficient and scalable, but also fully adaptable to any
        requirement. My goal is to offer services with no limitations—fast,
        reliable, and built to perform.
      </p>
    </div>
  );
}
