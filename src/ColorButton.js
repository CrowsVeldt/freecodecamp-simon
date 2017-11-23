import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  height: 300px;
  width: 300px;
  border: 1px solid black;
  border-radius: 100% 0 0 0;
`

class ColorButton extends Component {
  render () {
    return (
      <Button />
    )
  }
}

export default ColorButton
