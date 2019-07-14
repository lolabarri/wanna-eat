import React from "react";
import styled from "@emotion/styled";

const RowStyle = styled.tr`
  :hover {
    background-color: #f5f5f5;
  }
`;

const RankingRow = ({ users }) => {
  return (
    <RowStyle>
      <td>{users.name}</td>
      <td>{users.points}</td>
    </RowStyle>
  );
};

export default RankingRow;
