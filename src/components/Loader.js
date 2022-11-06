import React from "react";
import { LoaderCont, Star, LoaderText } from "./Loader.styles.js";
import { useSpring, config } from "react-spring";
import "./Loader.css";
import StarIco from "./StarIcon.js";

const Loader = () => {
  const loaderProp1 = useSpring({
    loop: true,
    to: [
      { x: 0, y: -100 },
      { x: 0, y: 0 },
    ],
    from: { x: 0, y: 0 },
    config: config.slow,
    delay: 0,
    reset: true,
  });
  const loaderProp2 = useSpring({
    loop: true,
    to: [
      { x: -30, y: -80 },
      { x: 30, y: -20 },
    ],
    from: { x: 30, y: -20 },
    config: config.slow,
    delay: 50,
    reset: true,
  });
  const loaderProp3 = useSpring({
    loop: true,
    to: [
      { x: -30, y: -20 },
      { x: 30, y: -80 },
    ],
    from: { x: 30, y: -80 },
    config: config.slow,
    delay: 100,
    reset: true,
  });
  const loaderProp4 = useSpring({
    loop: true,
    to: [
      { x: 50, y: -50 },
      { x: -50, y: -50 },
    ],
    from: { x: -50, y: -50 },
    config: config.slow,
    delay: 150,
    reset: true,
  });
  return (
    <LoaderCont>
      <Star style={{ position: "absolute", ...loaderProp1 }}>
        <StarIco />
      </Star>
      <Star style={{ position: "absolute", ...loaderProp2 }}>
        <StarIco />
      </Star>
      <Star style={{ position: "absolute", ...loaderProp3 }}>
        <StarIco />
      </Star>
      <Star style={{ position: "absolute", ...loaderProp4 }}>
        <StarIco />
      </Star>
      <LoaderText>
        <b>Looking at the sky...</b>
        <br /> (While the server wakes up)
      </LoaderText>
    </LoaderCont>
  );
};

export default Loader;
