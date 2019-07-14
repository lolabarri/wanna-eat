import React from "react";
import { UserCard } from "../components/UserCard";
import { AuthAPI } from "../lib/auth";
import { PointsAPI } from "../lib/points";
import { QuinielaAPI } from "../lib/quinielaScrape";
import { logout } from "../lib/redux/actions";
import { connect } from "react-redux";
import styled from "@emotion/styled";

const ButtonStyle = styled.button`
  background-color: tomato;
  color: white;
  border-radius: 5px;
`;

const User = connect(state => ({ user: state.user }))(
  ({ user, dispatch, history }) => {
    return (
      <div>
        <UserCard name={user.name} points={user.points} />
        <ButtonStyle
          onClick={() =>
            QuinielaAPI.getOneQuinielaResult()
              .then(() => PointsAPI.updatePoints())
              .then(() => history.push("/user"))
          }
        >
          Update points
        </ButtonStyle>
        <ButtonStyle
          onClick={() =>
            AuthAPI.logout()
              .then(() => history.push("/"))
              .then(() => {
                dispatch(logout());
              })
          }
        >
          Logout
        </ButtonStyle>
      </div>
    );
  }
);

export default User;
