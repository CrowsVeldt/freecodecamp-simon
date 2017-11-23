import React, { Component } from 'react'
import styled from 'styled-components'
import ColorButton from './ColorButton'

const Game = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  height: 700px;
  width: 700px;
  box-shadow: 5px 5px 2.5px 0px rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`
const CenterPanel = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  height: 300px;
  width: 300px;
`

class App extends Component {
  render () {
    return (
      <Game className='App'>
        <CenterPanel />
        <ColorButton />
      </Game>
    )
  }
}

export default App
