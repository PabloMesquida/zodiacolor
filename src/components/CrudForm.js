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
const IS_MOBILE = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const initialForm = { name: "", sun: "", ascendant: "", moon: "", id: null };

const CrudForm = ({ createData }) => {
  const [form, setForm] = useState(initialForm);
  const [dragging, setDragging] = useState(false);
  const [attached, setAttached] = useState(false);
  const targetRefSun = useRef(null);
  const targetRefAsc = useRef(null);
  const targetRefMoon = useRef(null);

  const [props, api] = useSprings(data.signs.length, () => ({
    x: 0,
    y: 0,
  }));

  const bind = useDrag(
    ({
      args: [originalIndex],
      active,
      last,
      xy: [x, y],
      movement: [mx, my],
    }) => {
      setDragging(active);
      setAttached(document.elementFromPoint(x, y) === targetRefSun.current);
      if (last) {
        api.start((index) => {
          if (index !== originalIndex) return;
          return {
            x: attached ? 300 : 0,
            y: 0,
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
              <TargetDiv attached={attached} />
              <TargetDiv attached={attached} />
              <TargetDiv attached={attached} />
            </TargetDesign>
            <TargetRef>
              <TargetDivRef ref={targetRefSun} />
              <TargetDivRef ref={targetRefAsc} />
              <TargetDivRef ref={targetRefMoon} />
            </TargetRef>
          </TargetCont>
        </FormSection>
        <input name="sun" type="hidden" value={form.sun} />
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
