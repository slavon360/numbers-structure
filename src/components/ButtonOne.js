import React from 'react';
import wrapper from '../HOC/wrapper';

const buttonOne = (props) => {
  return (
    <button style={props.styles}>I am button One</button>
  )
}

export default wrapper(buttonOne);
