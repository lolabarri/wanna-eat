import React from "react";
import styled from "@emotion/styled";

const RowStyle = styled.tr`
:hover {background-color: #f5f5f5;};
`
const MatchesRow = ({matches}) => {
  return (
    <RowStyle>
      <td>{matches.match}</td>
      <td>{matches.finalResult}</td>
    </RowStyle>
  );
};

export default MatchesRow;