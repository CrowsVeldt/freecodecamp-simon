import ColorButton from './ColorButton'
import Display from './Display'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameSequence: [],
      playerInput: [],
      active: false,
      strictMode: false,
      outputMode: false,
      displayValue: ''
    }
  }

  addNumberToSequence = () => {
    this.setState(prevState => ({
      gameSequence: [...prevState.gameSequence, randomNumber()]
    }))
  }

  activateButton = (button) => {
    let buttonTitle
    switch (button) {
      case 0:
        buttonTitle = 'greenClass'
        ReactDOM.findDOMNode(this.audioElement0).play()
        break;
      case 1:
        buttonTitle = 'redClass'
        ReactDOM.findDOMNode(this.audioElement1).play()
        break;
      case 2:
        buttonTitle = 'blueClass'
        ReactDOM.findDOMNode(this.audioElement2).play()
        break;
      case 3:
        buttonTitle = 'yellowClass'
        ReactDOM.findDOMNode(this.audioElement3).play()
        break;
      default:
        console.log('erronious button number, get help!')
        break;
    }

    this.setState({
      [buttonTitle]: 'active'
    })
    setTimeout(() => {
      this.setState({
        [buttonTitle]: ''
      })
    }, 550)
  }

  playSequence = (sequence) => {
    if (sequence.length > 0) {
      this.setState({
        outputMode: true,
        displayValue: this.state.gameSequence.length
      })
      this.activateButton(sequence[0])
      setTimeout(() => { 
        this.playSequence(sequence.slice(1))
      }, 750)
    } else if (sequence.length === 0) {
      this.setState({
        outputMode: false,
      })
    }
  }

  handleClick = (button) => {
    this.setState(prevState => ({
      playerInput: [...prevState.playerInput, button]
    }))
    this.activateButton(button)
    setTimeout(() => {
      this.checkInput(button)
    }, 0)
  }

  checkInput = (number) => {
    const sequence = this.state.gameSequence
    const inputLength = this.state.playerInput.length

    if (this.state.strictMode === true && number !== sequence[inputLength - 1]) {
      this.setState({
        displayValue: '!!!!!'
      })
      setTimeout(this.startGame, 1000)
    } else if (number !== sequence[inputLength - 1]) {
      this.setState({
        playerInput: [],
        displayValue: '!!!!!'
      })
      setTimeout(() => {
        this.playSequence(this.state.gameSequence)
      }, 1000)
    } else if (inputLength !== sequence.length) {
      return
    } else if (inputLength === 20) {
      this.setState({
        gameSequence: [],
        playerInput: [],
        active: false,
        displayValue: 'WINNER'
      })
    } else {
      this.setState({
        playerInput: []
      })
      this.addNumberToSequence()
      setTimeout(() => {
        this.playSequence(this.state.gameSequence)
      }, 1000)
    }
  }

  toggleStrict = () => {
    this.setState(prevState => ({
      strictMode: !prevState.strictMode
    }))
  }

  startGame = () => {
    this.setState({
      gameSequence: [],
      playerInput: [],
      active: true,
      outputMode: false,
      displayValue: ''
    })
    this.addNumberToSequence()
    setTimeout(() => {
      this.playSequence(this.state.gameSequence)
    }, 0)
  }

  render () {
    return (
      <Game className='game'>

        <CenterPanel className='centerPanel'>

          <Title className='title'>
            Simon
          </Title>

          <label htmlFor='strictToggle'>
            Strict Mode
          </label>
          <Toggle type='checkbox' id='strictToggle' onChange={this.toggleStrict} />

          <Display className='display' title={this.state.displayValue} /> 

          <ButtonContainer className='buttonContainer'>
            <StartButton className='start' onClick={this.startGame}>
              Start
            </StartButton>
          </ButtonContainer>

        </CenterPanel>

        <ColorButton
          className={this.state.greenClass}
          onClick={!this.state.outputMode ? 
                  (e) => {this.handleClick(0)} :
                  undefined}
          green
        >
          <audio ref={(audio) => {this.audioElement0 = audio}} >
            <source src='https://s3.amazonaws.com/freecodecamp/simonSound1.mp3' />
          </audio>
        </ColorButton>

        <ColorButton
          className={this.state.redClass}
          onClick={!this.state.outputMode ? 
                  (e) => {this.handleClick(1)} :
                  undefined}
          red
        >
          <audio ref={audio => this.audioElement1 = audio} >
            <source src='https://s3.amazonaws.com/freecodecamp/simonSound2.mp3' />
          </audio>
        </ColorButton>

        <ColorButton
          className={this.state.blueClass}
          onClick={!this.state.outputMode ?
                  (e) => {this.handleClick(2)} :
                  undefined}
          blue
        >
          <audio ref={audio => this.audioElement2 = audio} >
            <source src='https://s3.amazonaws.com/freecodecamp/simonSound3.mp3' />
          </audio>
        </ColorButton>

        <ColorButton
          className={this.state.yellowClass}
          onClick={!this.state.outputMode ? 
                  (e) => {this.handleClick(3)} : 
                  undefined}
          yellow
        >
          <audio ref={audio => this.audioElement3 = audio} >
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
background-color: tan;
color: black;
z-index: 2;
`

const ButtonContainer = styled.div`
`

const StartButton = styled.button`
border-radius: 100%;
height: 60px;
width: 60px;
background-color: green;
color: white;
`

const Title = styled.h1`
font-size: 70px;
text-shadow: 3px 3px 8px black;
margin: 20px;
`

const Toggle = styled.input`
appearance: none;
border: 1px solid black;
border-radius: 50%;
height: 20px;
width: 20px;
position: relative;

&:checked {
  background-color: green;
}
`

export default App

export function randomNumber () {
  const min = 0
  const max = 3
  return Math.floor(Math.random() * (max - min + 1)) + min
}
