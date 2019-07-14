import React, { Component } from "react";
import BetRow from "../components/BetRow";
// import FullTo15Row from "../components/FullTo15Row";
import { BetAPI } from "../lib/bet";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { errorMessageAction, clearMessages } from "../lib/redux/actions";
import styled from "@emotion/styled";
import { getQuinielaBet, getFullTo15 } from "../lib/quinielaScrape";

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

const ButtonStyle = styled.button`
  background-color: tomato;
  color: white;
  border-radius: 5px;
`;

class _Bet extends Component {
  constructor() {
    super();
    this.state = {
      allTheBets: [],
      data: null
    };
  }

  componentDidMount() {
    getQuinielaBet().then(data => {
      this.setState(data);
      console.log(data);
    });
    getFullTo15().
  }

  handleBetting() {
    const { history, dispatch } = this.props;
    if (this.state.allTheBets.length === 14) {
      BetAPI.bet(this.state.allTheBets)
        .then(() => {
          dispatch(clearMessages());
          history.push("/")})
        .catch(() => {
          dispatch(errorMessageAction("Bet was not done"));
        });
    } else {
      dispatch(errorMessageAction("You must fill in all the bets"));
    }
  }

  handleChange(value, index) {
    let apuestas = this.state.allTheBets.filter(e => e.index !== index);
    let obj = {
      index,
      value
    };
    apuestas.push(obj);
    this.setState({ allTheBets: apuestas });
  }

  render() {
    return (
      <React.Fragment>
        <TableStyle>
          <thead>
            <tr>
              <th>NUM</th>
              <th>MATCH</th>
              <th>1</th>
              <th>X</th>
              <th>2</th>
            </tr>
          </thead>
          <tbody>
            {this.state.bets ? (
              this.state.bets.map((quiniela, index) => (
                <BetRow
                  onChange={e => this.handleChange(e.target.value, index)}
                  key={index}
                  quiniela={quiniela}
                />
              ))
            ) : (
              <tr>
                <td className="donut" />
              </tr>
            )}
          </tbody>
        </TableStyle>
        <br />
        <ButtonStyle onClick={() => this.handleBetting()}>Submit</ButtonStyle>
        <br />
        <h3>{this.props.messages}</h3>
        {/* <TableStyle>
        <thead>
            <tr>
              <th>NUM</th>
              <th>MATCH</th>
              <th>RESULT</th>
            </tr>
          </thead>
          <tbody>
            <FullTo15Row
              number="15"
              localTeam="R. MADRID"
              visitorTeam="BARCELONA"
            />
          </tbody>
        </TableStyle> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {messages: state.messages}
}

export const Bet = connect(mapStateToProps)(withRouter(_Bet));
