import React from 'react';
import styled from "@emotion/styled";
import { connect } from 'react-redux';

const CardStyle = styled.div`
width: 80%;
margin: 2vh 5vw;
border: 1px solid tomato;
border-radius: 5px;
padding: 1vh;
float: left;
a {
  text-decoration: none;
}
a:visited {
  color: black;
}
img {
  padding: 1vh;
  width: 50%;
}
`
const Card = (props) => {
  return (
    <CardStyle>
        <img alt="" src="https://perkovec.gallerycdn.vsassets.io/extensions/perkovec/emoji/0.0.3/1474455600876/Microsoft.VisualStudio.Services.Icons.Default" />
        <br />
        <h3>{props.name}</h3>
        <p>Points: {props.points}</p>
      
    </CardStyle>
  );
};

export const UserCard = connect(state => state)(Card);