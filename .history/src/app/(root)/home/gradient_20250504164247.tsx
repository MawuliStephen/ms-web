import React from "react";

const GradientHeading: React.FC = () => {
  const animatedLetters = (word: string, gradientClass: string) =>
    [...word].map((char, i) => (
      <span
        key={i}
        className={`bg-gradient-to-r ${gradientClass} bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x`}
      >
        {char}
      </span>
    ));

  return (
    <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
      Versatile,  <span className="inline-flex ">
        {animatedLetters("Experience", "from-teal-500 via-teal-600 to-yellow-500")}
      </span> Software Engineer &  <br /> <span className="inline-flex">
        {animatedLetters("Marketing", "from-teal-400 via-black-500 to-teal-600")}
      </span> Expert
    </h1>
  );
};

export default GradientHeading;
