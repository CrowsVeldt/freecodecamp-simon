import React, { Component } from 'react'
import styled from 'styled-components'

class ColorButton extends Component {
  render () {
    return (
      <Button {...this.props}>
        {/* look up "ref" for playing the audio */}
        <audio>
          <source src={this.props.source} />
        </audio>
      </Button>
    )
  }
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
`

export default ColorButton
