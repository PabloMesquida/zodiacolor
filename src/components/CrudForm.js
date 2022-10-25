import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { ImgSign } from "./CrudForm.styles.js";

const initialForm = { name: "", sun: "", ascendant: "", moon: "", id: null };

const CrudForm = ({ createData, signs }) => {
  const [form, setForm] = useState(initialForm);

  console.log(signs);

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
        <input name="sun" type="hidden" value={form.sun} />
        <input name="ascendant" type="hidden" value={form.ascendant} />
        <input name="moon" type="hidden" value={form.moon} />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
      <div>
        {signs && signs.length > 0 ? (
          signs.map((el) => (
            <ImgSign
              img={`signs/${el.img}`}
              key={el.id}
              alt={el.name}
              color={el.color}
            />
          ))
        ) : (
          <p>Sin datos</p>
        )}
      </div>
    </>
  );
};

export default CrudForm;
