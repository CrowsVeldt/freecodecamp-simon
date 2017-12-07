import ColorButton from './ColorButton'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameSequence: [],
      active: false,
      outputMode: false
    }
  }

  playSequence = (sequence) => {
    if (sequence.length > 0) {
      this.setState({
        outputMode: true,
        active: true
      })
        switch (sequence[0]) {
        case 0:
          ReactDOM.findDOMNode(this.greenButtonRef).click()
          break;
        case 1:
          ReactDOM.findDOMNode(this.redButtonRef).click()
          break;
        case 2:
          ReactDOM.findDOMNode(this.blueButtonRef).click()
          break;
        default:
          ReactDOM.findDOMNode(this.yellowButtonRef).click()
          break;
        }
      setTimeout(() => { 
        this.playSequence(sequence.slice(1))
      }, 650)
    } else if (sequence.length === 0) {
      this.setState({
        outputMode: false
      })
    }
  }

  handleClick = (ref) => {
    // Button clas should be based on this.state, when pressed change the class to active
    // and play the tone
    console.log(ref)
  }

  startGame = () => {
    this.setState(prevState => ({
      gameSequence: [...prevState.gameSequence, generateNumber()]
    }))
    setTimeout(() => {
      this.playSequence(this.state.gameSequence)
    }, 0)
  }

  render () {
    return (
      <Game className='game'>

        <CenterPanel className='centerPanel'>
          <h1>
            Simon
          </h1>
          <ButtonContainer className='buttonContainer'>
            <StartButton onClick={!this.state.active ? this.startGame : undefined}>
              Start
            </StartButton>
          </ButtonContainer>
        </CenterPanel>

        <ColorButton
          ref={(greenButton) => {this.greenButtonRef = greenButton}}
          onClick={(e) => {this.handleClick(this.greenButtonRef)}}
          green
        >
          <audio ref={audio => this.audioElement1 = audio} >
            <source src='https://s3.amazonaws.com/freecodecamp/simonSound1.mp3' />
          </audio>
        </ColorButton>

        <ColorButton
          ref={(redButton) => {this.redButtonRef = redButton}}
          onClick={(e) => {this.handleClick(this.redButtonRef)}}
          red
        >
          <audio ref={audio => this.audioElement2 = audio} >
            <source src='https://s3.amazonaws.com/freecodecamp/simonSound2.mp3' />
          </audio>
        </ColorButton>

        <ColorButton
          ref={(blueButton) => {this.blueButtonRef = blueButton}}
          onClick={(e) => {this.handleClick(this.blueButtonRef)}}
          blue
        >
          <audio ref={audio => this.audioElement3 = audio} >
            <source src='https://s3.amazonaws.com/freecodecamp/simonSound3.mp3' />
          </audio>
        </ColorButton>

        <ColorButton
          ref={(yellowButton) => {this.yellowButtonRef = yellowButton}}
          onClick={(e) => {this.handleClick(this.yellowButtonRef)}}
          yellow
        >
          <audio ref={audio => this.audioElement4 = audio} >
            <source src='https://s3.amazonaws.com/freecodecamp/simonSound4.mp3' />
          </audio>
        </ColorButton>
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

const StartButton = styled.button`
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
