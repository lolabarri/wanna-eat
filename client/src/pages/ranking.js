import React, { Component } from "react";
import RankingRow from "../components/RankingRow";
import styled from "@emotion/styled";
import { AuthAPI } from "../lib/auth";

const TableStyle = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: left;
  vertical-align: middle;
  th {
    border-bottom: 1px solid #ddd;
    background-color: tomato;
    color: white;
    font-weight: normal;
  }
`;

const DivStyle = styled.div`
  overflow-x: auto;
`;

class ranking extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    AuthAPI.getUsers().then(data => {
      this.setState(data);
    });
  }

  render() {
    return (
      <DivStyle>
        <TableStyle>
          <thead>
            <tr>
              <th>NAME</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users ? (
              this.state.users.map((users, index) => (
                <RankingRow key={index} users={users} />
              ))
            ) : (
              <tr>
                <td>...</td>
              </tr>
            )}
          </tbody>
        </TableStyle>
      </DivStyle>
    );
  }
}

export default ranking;
