import React from "react";
import Typewriter from "typewriter-effect";

const Type = (props) => (
  <Typewriter
    options={{
      strings: props.str,
      autoStart: true,
      loop: true,
      deleteSpeed: 30,
    }}
  />
);

export default Type;
