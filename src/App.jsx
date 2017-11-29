import ColorButton from './ColorButton'
import React, { Component } from 'react'
import styled from 'styled-components'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sequence: [],
      isPlaying: false
    }
  }

  startGame = () =>  {
    const currentSequence = this.state.sequence
    currentSequence.push(generateNumber())
    this.setState({
      sequence: currentSequence,
      isPlaying: true
    })
  }

  playSequence = () => {
  }

  activateButton = (num) => {
    switch (num) {
      case 1:
        this.audioElement1.play()
        break;
      case 2:
        this.audioElement2.play()
        break;
      case 3:
        this.audioElement3.play()
        break;
      default:
        this.audioElement4.play()
        break;
    
    }    
  }

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
          green
          onClick={() => {this.activateButton(1)}}
        />
        <audio ref={(audio1) => { this.audioElement1 = audio1 }}>
          <source src={'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'} />
        </audio>

        <ColorButton
          red
          onClick={() => {this.activateButton(2)}}
        />
        <audio ref={(audio2) => { this.audioElement2 = audio2 }}>
          <source src={'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'} />
        </audio>

        <ColorButton
          blue
          onClick={() => {this.activateButton(3)}}
        />
        <audio ref={(audio3) => { this.audioElement3 = audio3 }}>
          <source src={'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'} />
        </audio>

        <ColorButton
          yellow
          onClick={() => {this.activateButton(4)}}
        />
        <audio ref={(audio4) => { this.audioElement4 = audio4 }}>
          <source src={'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'} />
        </audio>

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
