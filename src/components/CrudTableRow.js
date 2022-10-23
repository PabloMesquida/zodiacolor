import React from "react";

const CrudTableRow = ({ el }) => {
  console.log(el);
  let { name, sun, ascendant, moon, id } = el;
  return (
    <tr>
      <td>{name}</td>
      <td>{sun}</td>
      <td>{ascendant}</td>
      <td>{moon}</td>
    </tr>
  );
};

export default CrudTableRow;
