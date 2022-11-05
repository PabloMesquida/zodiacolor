import Plane from "./Plane.js";

const Borders = () => {
  return (
    <>
      <Plane position={[0, -4.25, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Plane position={[-4.35, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Plane position={[4.35, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
      <Plane position={[0, 0, 1.5]} rotation={[0, -Math.PI, 0]} />
      <Plane position={[0, 0, -1.5]} rotation={[0, 0, 0]} />
    </>
  );
};

export default Borders;
