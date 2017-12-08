import ColorButton from './ColorButton'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameSequence: [0, 1, 2, 3],
      playerInput: [],
      active: false,
      outputMode: false,
      greenClass: '',
      redClass: '',
      blueClass: '',
      yellowClass: ''
    }
  }

  addNumberToSequence = () => {
    this.setState(prevState => ({
      gameSequence: [...prevState.gameSequence, randomNumber()]
    }))
  }

  activateButton = (button) => {
    switch (button) {
      case 0:
        ReactDOM.findDOMNode(this.audioElement0).play()
        this.setState({
          greenClass: 'active'
        })
        setTimeout(() => {
          this.setState({
            greenClass: ''
          })
        }, 550)
        break;
      case 1:
        ReactDOM.findDOMNode(this.audioElement1).play()
        this.setState({
          redClass: 'active'
        })
        setTimeout(() => {
          this.setState({
            redClass: ''
          })
        }, 550)
        break;
      case 2:
        ReactDOM.findDOMNode(this.audioElement2).play()
        this.setState({
          blueClass: 'active'
        })
        setTimeout(() => {
          this.setState({
            blueClass: ''
          })
        }, 550)
        break;
      case 3:
        ReactDOM.findDOMNode(this.audioElement3).play()
        this.setState({
          yellowClass: 'active'
        })
        setTimeout(() => {
          this.setState({
            yellowClass: ''
          })
        }, 550)
        break;
      default:
        console.log('no such button')
        break;

    }
  }

  playSequence = (sequence) => {
    if (sequence.length > 0) {
      this.setState({
        playerInput: [],
        outputMode: true,
      })
      this.activateButton(sequence[0])
      setTimeout(() => { 
        this.playSequence(sequence.slice(1))
      }, 550)
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
    this.checkInput()
  }

  checkInput = () => {
    const sequence = this.state.gameSequence
    const input = this.state.playerInput

    input.forEach((item, index) => {

      if (item !== sequence[index]) {
        this.setState({
          playerInput: []
        })
        setTimeout(() => {
          this.playSequence(this.state.gameSequence)
         }, 550)
      } 
    })
  }

  startGame = () => {
    this.setState({
      active: true
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
          className={this.state.greenClass}
          onClick={!this.state.outputMode ? 
                  (e) => {this.handleClick(0)} :
                  undefined
          }
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
                  undefined
          }
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
                  undefined
          }
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
                  undefined
          }
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

export function randomNumber () {
  const min = 0
  const max = 3
  return Math.floor(Math.random() * (max - min + 1)) + min
}
