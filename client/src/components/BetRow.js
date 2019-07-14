import React from "react";
import styled from "@emotion/styled";

const RowStyle = styled.tr`
  :hover {
    background-color: #f5f5f5;
  }
`;

const BetRow = ({ quiniela, onChange}) => {
  return (
    <RowStyle>
      <td>{quiniela.number}</td>
      <td>{quiniela.match}</td>
      <td><input onChange={onChange} type="radio" name={quiniela.name} value="1"/></td>
      <td><input onChange={onChange} type="radio" name={quiniela.name} value="X"/></td>
      <td><input onChange={onChange} type="radio" name={quiniela.name} value="2"/></td>
    </RowStyle>
  );
};

export default BetRow;
