import React from "react";
import Color from "./Color.js";
import { TableContainer, ColorTitle, Colors } from "./CrudTable.styles.js";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  // console.log(data.length);
  return (
    <TableContainer>
      <ColorTitle>
        <h3>Your Color:</h3>
      </ColorTitle>
      <Colors>
        {data.length > 0 ? (
          data.map((el) => <Color key={el.id} el={el} />)
        ) : (
          <div>No Data</div>
        )}
      </Colors>
    </TableContainer>
  );
};

export default CrudTable;
