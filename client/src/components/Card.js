import React from 'react';
import styled from "@emotion/styled";

const CardStyle = styled.div`
width: 33%;
height: 33%;
margin: 2vh 5vw;
border: 1px solid tomato;
border-radius: 5px;
padding: 1vh;
display: inline-block;
font-size: 1em;
a {
  text-decoration: none;
}
a:visited {
  color: black;
}
img {
  padding: 1vh;
  width: 33%;
}
`

const Card = (props) => {
  return (
    <CardStyle>
      <a href={props.to}>
        <img alt="" src={props.img} />
        <br />
        <h3>{props.linkText}</h3>
        <p>{props.description}</p>
        </a>
    </CardStyle>
  )
}

export default Card;