import { useMemo } from "react";
import * as THREE from "three";
import { useSphere } from "@react-three/cannon";

const tempColor = new THREE.Color();

const CreateColors = ({ data }) => {
  const cArray = useMemo(
    () =>
      Float32Array.from(
        new Array(data.length)
          .fill()
          .flatMap((_, i) => tempColor.set(data[i].color).toArray())
      ),
    [data]
  );

  const [ref] = useSphere((index) => ({
    mass: 100,
    position: [Math.random(), index, 0],
    args: [1],
  }));

  return (
    <instancedMesh ref={ref} args={[null, null, 14]}>
      <sphereGeometry args={[1, 32, 32]}>
        <instancedBufferAttribute
          attach="attributes-color"
          args={[cArray.reverse(), 3]}
        />
      </sphereGeometry>
      <meshBasicMaterial toneMapped={false} vertexColors />
    </instancedMesh>
  );
};

export default CreateColors;
