import { useEffect } from "react";
import { usePlane } from "@react-three/cannon";

const Plane = ({ color, position = [0, 0, 0], ...props }) => {
  const [, api] = usePlane(() => ({ ...props }));
  useEffect(() => api.position.set(...position), [api, position]);
};

export default Plane;
