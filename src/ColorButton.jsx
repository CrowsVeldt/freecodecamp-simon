import React from 'react'
import styled from 'styled-components'

function ColorButton (props) {
  return (
    <Button
      onClick={props.onClick}
      active
      {...props}
      />
  )
}

const Button = styled.button`
  height: 350px;
  width: 350px;
  border: 10px solid black;
  position: absolute;
  z-index: 1;

  border-radius: ${
    props => props.green ? '100% 0 0 0'
      : props.red ? '0 100% 0 0'
      : props.blue ? '0 0 100% 0'
      : '0 0 0 100%'
  };

  top: ${
    props => props.green ? '0px'
      : props.red ? '0px'
      : props.blue ? '350px'
      : '350px'
   };

  left: ${
    props => props.green ? '0px'
      : props.red ? '350px'
      : props.blue ? '350px'
      : '0px'
  };

  background-color: ${
    props => props.green ? 'green'
      : props.red ? 'red'
      : props.blue ? 'blue'
      : 'yellow'
  };

  filter: ${
    props => props.active ? 'brightness(5)'
      : 'brightness(1)'
  };
`

export default ColorButton
