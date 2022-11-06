import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import CreateColors from "./CreateColors.js";
import Borders from "./Borders.js";
import Mouse from "./Mouse.js";

const Colors = ({ data }) => {
  return (
    <Canvas
      style={{
        height: "342px",
        width: "370px",
        position: "relative",
        left: "-2rem",
      }}
    >
      <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={40} />
      <Physics
        allowSleep={true}
        broadphase={"SAP"}
        sleepSpeedLimit={0.001}
        sleepTimeLimit={1}
      >
        <Mouse />
        <Borders />
        <CreateColors data={data} />
      </Physics>
    </Canvas>
  );
};

export default Colors;
