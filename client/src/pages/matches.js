import React, { Component } from "react";
import MatchesRow from "../components/MatchesRow";
import styled from "@emotion/styled";
import { getQuinielaResults } from "../lib/quinielaScrape";

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

class matches extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    getQuinielaResults().then(data => {
      this.setState(data);
    });
  }

  render() {
    return (
      <div>
        <TableStyle>
          <thead>
            <tr>
              <th>MATCH</th>
              <th>RESULT</th>
            </tr>
          </thead>
          <tbody>
            {this.state.results ? (
              this.state.results.map((matches, index) => (
                <MatchesRow key={index} matches={matches} />
              ))
            ) : (
              <tr>
                <td>...</td>
              </tr>
            )}
          </tbody>
        </TableStyle>
      </div>
    );
  }
}

export default matches;
