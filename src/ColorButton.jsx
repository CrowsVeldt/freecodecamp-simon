import React, { Component } from 'react'
import styled from 'styled-components'

class ColorButton extends Component {

    handleClick = () => {
      this.audioElement.play()
    }

  render () {
    return (
      <Button
        ref={this.props.buttonRef}
        onClick={this.handleClick}
        active
        {...this.props}
      >
        <audio ref={audio => this.audioElement = audio}>
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
    props => props.green ? 'RGB(0, 155, 0)'
      : props.red ? 'RGB(155, 0, 0)'
      : props.blue ? 'RGB(0, 0, 155)'
      : 'RGB(155, 155, 0)'
  };

  &:active {
    background-color: ${
      props => props.green ? 'RGB(0, 255, 0)'
        : props.red ? 'RGB(255, 0, 0)'
        : props.blue ? 'RGB(0, 0, 255)'
        : 'RGB(255, 255, 0)'
      };
  }
`

export default ColorButton
