import ColorButton from './ColorButton'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameSequence: [0, 1, 2, 3]
    }
  }

  playSequence = (sequence) => {
    // map sequence, and play each button accordingly
  }

  // startGame = () = {
  //   ReactDOM.findDOMNode(this.yellowButtonRef).click()
  // }

  render () {
    return (
      <Game className='game'>

        <CenterPanel className='centerPanel'>
          <h1>
            Simon
          </h1>
          <ButtonContainer className='buttonContainer'>
            <PlayButton onClick={this.startGame}>
              Play
            </PlayButton>
          </ButtonContainer>
        </CenterPanel>

        <ColorButton
          buttonRef={(greenButton) => {this.greenButtonRef = greenButton}}
          green
          source={'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'}
        />

        <ColorButton
          buttonRef={(redButton) => {this.redButtonRef = redButton}}
          red
          source={'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'}

        />

        <ColorButton
          buttonRef={(blueButton) => {this.blueButtonRef = blueButton}}
          blue
          source={'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'}
        />

        <ColorButton
          buttonRef={(yellowButton) => {this.yellowButtonRef = yellowButton}}
          yellow
          source={'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'}
        />
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
flex-direction: column;
justify-content: center;
align-items: center;

background-color: black;
color: white;

z-index: 2;
`

const ButtonContainer = styled.div`
background-color: tan;
`

const PlayButton = styled.button`
border-radius: 100%;
height: 60px;
width: 60px;
background-color: green;
color: white;
`

export default App

export function generateNumber () {
  const min = 0
  const max = 3
  return Math.floor(Math.random() * (max - min + 1)) + min
}
