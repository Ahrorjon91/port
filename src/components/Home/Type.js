import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Разработчик программного обеспечения",
          "Фрилансер",
          "Разработчик MERN Stack",
          "Контрибьютор в открытые исходники",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
