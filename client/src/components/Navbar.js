import React from "react";
import styled from "@emotion/styled";

const NavStyle = styled.div`
  background-color: tomato;
  overflow: hidden;
  width: 100%;
  margin-top: 0;
  margin-bottom: 2vh;
  a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 10px 10px;
    text-decoration: none;
    font-size: 17px;
    margin: auto;
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 12%;
  }
`;

export const Navbar = () => {
  return (
    <NavStyle>
      <a href="/">
        <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Soccerball-red.svg/400px-Soccerball-red.svg.png" />
      </a>
    </NavStyle>
  );
};
