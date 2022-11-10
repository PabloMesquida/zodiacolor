import React from "react";
import Colors from "./Colors/Colors.js";
import {
  TableContainer,
  ColorTitle,
  YourColor,
  LatestColors,
} from "./CrudTable.styles.js";

const CrudTable = ({ data }) => {
  // console.log(data[data.length - 1].color);
  return (
    <TableContainer>
      <LatestColors>Latest</LatestColors>
      <ColorTitle>
        <h3>Your Color</h3>
        <YourColor color={data[data.length - 1].color} />
      </ColorTitle>

      <Colors data={data} />
    </TableContainer>
  );
};

export default CrudTable;
