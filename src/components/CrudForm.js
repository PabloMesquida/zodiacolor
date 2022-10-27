import React, { useState } from "react";
import { useSprings } from "react-spring";
import { useDrag } from "@use-gesture/react";
import {
  ImgSign,
  SignContainer,
  TargetDiv,
  TargetCont,
} from "./CrudForm.styles.js";
import data from "../helpers/signs.json";

const initialForm = { name: "", sun: "", ascendant: "", moon: "", id: null };

const CrudForm = ({ createData }) => {
  const [form, setForm] = useState(initialForm);

  const [props, api] = useSprings(data.signs.length, () => ({
    x: 0,
    y: 0,
  }));

  const bind = useDrag(
    ({ args: [originalIndex], offset: [ox, oy] }) => {
      api.start((index) => {
        if (index !== originalIndex) return;

        return {
          x: ox,
          y: oy,
        };
      });
    },
    {
      from: ({ args: [originalIndex] }) => [
        props[originalIndex].x.get(),
        props[originalIndex].y.get(),
      ],
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
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <TargetCont>
          <TargetDiv />
          <TargetDiv />
          <TargetDiv />
        </TargetCont>
        <input name="sun" type="hidden" value={form.sun} />
        <input name="ascendant" type="hidden" value={form.ascendant} />
        <input name="moon" type="hidden" value={form.moon} />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
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
    </>
  );
};

export default CrudForm;
