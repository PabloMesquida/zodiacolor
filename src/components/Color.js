import React from "react";
import { ColorElement } from "./Color.styles.js";

const Color = ({ el }) => {
  console.log(el.color);
  return <ColorElement color={el.color} />;
};

export default Color;
