import React from "react";
import styled from "@emotion/styled";

const RowStyle = styled.tr`
  :hover {
    background-color: #f5f5f5;
  }
`;

// const FullTo15Row = ({ quiniela, onChange}) => {

const FullTo15Row = (props) => {
  return (
    <RowStyle>
      <td>{props.number}</td>
      <td>{props.localTeam} - {props.visitorTeam}</td>
      <td><input onChange={props.onChange} type="text" name={props.name} value="" placeholder="0-M"/></td>
    </RowStyle>
  );
};

export default FullTo15Row;
