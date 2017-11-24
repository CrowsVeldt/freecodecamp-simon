import React, { Component } from 'react'
import styled from 'styled-components'
import ColorButton from './ColorButton'

class App extends Component {
  render () {
    return (
      <Game className='App'>
        <CenterPanel>
          <h1>Simon</h1>
        </CenterPanel>
        <ColorButton green />
        <ColorButton red />
        <ColorButton blue />
        <ColorButton yellow />
      </Game>
    )
  }
}

const Game = styled.div`
border: 1px solid black;
border-radius: 50%;
height: 700px;
width: 700px;
box-shadow: 5px 5px 2.5px 0px rgba(0,0,0,0.5);
display: flex;
justify-content: center;
align-items: center;
position: relative;
z-index: 0;
`
const CenterPanel = styled.div`
border: 1px solid black;
border-radius: 50%;
height: 300px;
width: 300px;
display: flex;
justify-content: center;
align-items: center;

background-color: black;
color: white;

z-index: 2;
`

export default App
