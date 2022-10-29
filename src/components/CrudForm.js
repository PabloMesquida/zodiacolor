import React, { useState, useRef } from "react";
import { useSprings } from "react-spring";
import { useDrag } from "@use-gesture/react";
import {
  InputsContainer,
  NameContainer,
  ImgSign,
  SignContainer,
  TargetDiv,
  TargetDivRef,
  TargetCont,
  FormSection,
  InputName,
  TargetDesign,
  TargetRef,
} from "./CrudForm.styles.js";
import data from "../helpers/signs.json";

const initialForm = { name: "", sun: "", ascendant: "", moon: "", id: null };

const TARGET_SIZE = "68px";

const CrudForm = ({ createData }) => {
  const [form, setForm] = useState(initialForm);
  const [dragging, setDragging] = useState(false);
  const [attachedSun, setAttachedSun] = useState(false);
  const [attachedAsc, setAttachedAsc] = useState(false);
  const [attachedMoon, setAttachedMoon] = useState(false);
  const targetRefSun = useRef(null);
  const targetRefAsc = useRef(null);
  const targetRefMoon = useRef(null);

  const [props, api] = useSprings(data.signs.length, () => ({
    x: 0,
    y: 0,
  }));

  let signType;

  const bind = useDrag(
    ({
      args: [originalIndex],
      active,
      last,
      xy: [x, y],
      movement: [mx, my],
    }) => {
      setDragging(active);
      setAttachedSun(document.elementFromPoint(x, y) === targetRefSun.current);
      attachedSun && (signType = "sun");
      setAttachedAsc(document.elementFromPoint(x, y) === targetRefAsc.current);
      attachedAsc && (signType = "asc");
      setAttachedMoon(
        document.elementFromPoint(x, y) === targetRefMoon.current
      );
      attachedMoon && (signType = "moon");

      let s = document.getElementById(originalIndex);
      let sPos = s.getBoundingClientRect();
      let tSun = document.getElementById("target-sun");
      let tSunPos = tSun.getBoundingClientRect();
      let tSunRef = targetRefSun.current;
      if (last) {
        api.start((index) => {
          if (index !== originalIndex) return;
          setSign(signType, s.id, tSun, tSunRef);

          return {
            x: attachedSun ? tSunPos.x - sPos.x - 57 : 0,
            y: attachedSun ? tSunPos.y - sPos.y + 8 : 0,
          };
        });
      } else {
        api.start((index) => {
          if (index !== originalIndex) return;
          return {
            x: mx + 10,
            y: my + 10,
            immediate: true,
          };
        });
      }
    }
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.sun || !form.ascendant || !form.moon) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    }
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
  };

  const setSign = (target, sign, targetCont, targetRef) => {
    setForm({ ...form, [target]: sign });
    targetRef.style.zIndex = -100;
    targetCont.style.backgroundColor = "white";
    // setAttachedSun(false);
    // setAttachedAsc(false);
    // setAttachedMoon(false);
  };

  return (
    <InputsContainer>
      <form onSubmit={handleSubmit}>
        <FormSection>
          <NameContainer>
            <InputName
              type="text"
              name="name"
              placeholder="Your name"
              onChange={handleChange}
              value={form.name}
            />
          </NameContainer>
          <TargetCont>
            <TargetDesign>
              <TargetDiv
                size={TARGET_SIZE}
                attached={attachedSun}
                id="target-sun"
              />
              <TargetDiv
                size={TARGET_SIZE}
                attached={attachedAsc}
                id="target-asc"
              />
              <TargetDiv
                size={TARGET_SIZE}
                attached={attachedMoon}
                id="target-moon"
              />
            </TargetDesign>
            <TargetRef>
              <TargetDivRef ref={targetRefSun} />
              <TargetDivRef ref={targetRefAsc} />
              <TargetDivRef ref={targetRefMoon} />
            </TargetRef>
          </TargetCont>
        </FormSection>
        <input id="sun" name="sun" type="hidden" value={form.sun} />
        <input name="ascendant" type="hidden" value={form.ascendant} />
        <input name="moon" type="hidden" value={form.moon} />
        {/* <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} /> */}

        <SignContainer>
          {props && props.length > 0 ? (
            props.map(({ x, y }, i) => (
              <ImgSign
                img={`signs/imgs/${data.signs[i].img}`}
                key={data.signs[i].id}
                {...bind(i)}
                style={{ x, y }}
                id={data.signs[i].id}
              />
            ))
          ) : (
            <p>Sin datos</p>
          )}
        </SignContainer>
      </form>
    </InputsContainer>
  );
};

export default CrudForm;
