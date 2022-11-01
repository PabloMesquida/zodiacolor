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
  SubmitContainer,
  InputSubmit,
  Credits,
  Messages,
} from "./CrudForm.styles.js";
import data from "../helpers/signs.json";

const initialForm = { name: "", sun: "", ascendant: "", moon: "", id: null };

const TARGET_SIZE = 68;

const CrudForm = ({ createData }) => {
  const [form, setForm] = useState(initialForm);
  const [dragging, setDragging] = useState(false);
  const [attachedSun, setAttachedSun] = useState(false);
  const [attachedAsc, setAttachedAsc] = useState(false);
  const [attachedMoon, setAttachedMoon] = useState(false);
  const targetRefSun = useRef(null);
  const targetRefAsc = useRef(null);
  const targetRefMoon = useRef(null);
  const refArray = useRef([]);
  const [iPosX, setIPosX] = useState();
  const [iPosY, setIPosY] = useState();
  const [message, setMessage] = useState("");

  const [props, api] = useSprings(data.signs.length, () => ({
    x: 0,
    y: 0,
  }));

  const bind = useDrag(
    ({
      args: [originalIndex],
      active,
      last,
      first,
      xy: [x, y],
      movement: [mx, my],
    }) => {
      setDragging(active);
      setAttachedSun(document.elementFromPoint(x, y) === targetRefSun.current);
      setAttachedAsc(document.elementFromPoint(x, y) === targetRefAsc.current);
      setAttachedMoon(
        document.elementFromPoint(x, y) === targetRefMoon.current
      );

      let xPos, yPos, target, targetPos;

      if (first) {
        api.start((index) => {
          if (index !== originalIndex)
            return {
              x: 0,
              y: 0,
            };
          setIPosX(refArray.current[index].getBoundingClientRect().x);
          setIPosY(refArray.current[index].getBoundingClientRect().y);
        });
      } else if (last) {
        api.start((index) => {
          if (index !== originalIndex) return;
          if (attachedSun) {
            target = document.getElementById("target-sun");
            targetPos = target.getBoundingClientRect();
            xPos = targetPos.x - iPosX + TARGET_SIZE / 8;
            yPos = targetPos.y - iPosY + TARGET_SIZE / 8;
            setSign("sun", index, targetRefSun.current, target);
          } else if (attachedAsc) {
            target = document.getElementById("target-asc");
            targetPos = target.getBoundingClientRect();
            xPos = targetPos.x - iPosX + TARGET_SIZE / 8;
            yPos = targetPos.y - iPosY + TARGET_SIZE / 8;
            setSign("ascendant", index, targetRefAsc.current, target);
          } else if (attachedMoon) {
            target = document.getElementById("target-moon");
            targetPos = target.getBoundingClientRect();
            xPos = targetPos.x - iPosX + TARGET_SIZE / 8;
            yPos = targetPos.y - iPosY + TARGET_SIZE / 8;
            setSign("moon", index, targetRefMoon.current, target);
          } else {
            xPos = 0;
            yPos = 0;
          }
          return {
            x: xPos,
            y: yPos,
          };
        });
      } else {
        api.start((index) => {
          if (index !== originalIndex) return;
          return {
            x: mx,
            y: my,
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
      setMessage("Incomplete data");
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

  const setSign = (target, sign, targetRef, targetCont) => {
    setForm({ ...form, [target]: sign });
    targetCont.style.cssText =
      "border: 10px solid white; background-color: white; ";
    targetRef.style.zIndex = -100;
    setAttachedSun(false);
    setAttachedAsc(false);
    setAttachedMoon(false);
    setTimeout(() => {
      setStatic(targetCont, sign);
      document.getElementById(sign).style.cssText =
        "transform: translate3d(0px, 0px, 0px); scale:0;";
      api.start((index) => {
        if (index === sign)
          return {
            x: 0,
            y: 0,
          };
      });
    }, 1000);
    setTimeout(() => {
      document.getElementById(sign).style.cssText =
        "animation: scale-up-center 0.2s ease-in-out both;";
    }, 2000);
    setTimeout(() => {
      document.getElementById(sign).style.removeProperty("animation");
    }, 2300);
  };

  const setStatic = (target, id) => {
    console.log(data.signs[id].img);
    target.style.cssText = `border: 10px solid white; background-image: url(signs/imgs/${data.signs[id].img}); background-size: cover;  background-position: center; background-color: lightblue;`;
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

        {/*  <input type="reset" value="Limpiar" onClick={handleReset} /> */}

        <SignContainer>
          {props && props.length > 0 ? (
            props.map(({ x, y }, i) => (
              <ImgSign
                img={`signs/imgs/${data.signs[i].img}`}
                key={data.signs[i].id}
                {...bind(i)}
                style={{ x, y, display: i > 11 ? "none" : "inline" }}
                id={i}
                ref={(ref) => {
                  refArray.current[i] = ref;
                }}
              />
            ))
          ) : (
            <p>Sin datos</p>
          )}
        </SignContainer>
        <SubmitContainer>
          <Messages>{message}</Messages>
          <InputSubmit type="submit" value="OK" onClick={handleSubmit} />
        </SubmitContainer>
      </form>
      <Credits>
        <a
          href="https://pixelfaces.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          ✨ Pixel Faces
        </a>
      </Credits>
    </InputsContainer>
  );
};

export default CrudForm;
