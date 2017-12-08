import ColorButton from './ColorButton'
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
      outputMode: false,
      greenClass: '',
      redClass: '',
      blueClass: '',
      yellowClass: ''
    }
  }

  playSequence = (sequence) => {
    if (sequence.length > 0) {
      this.setState({
        playerInput: [],
        outputMode: true,
        active: true
      })
        switch (sequence[0]) {
          case 0:
            ReactDOM.findDOMNode(this.audioElement0).play()
            this.setState({
              greenClass: 'active'
            })
            setTimeout(() => {
              this.setState({
                greenClass: ''
              }
            )}, 550)
            break;
          case 1:
            ReactDOM.findDOMNode(this.audioElement1).play()
            this.setState({
              redClass: 'active'
            })
            setTimeout(() => { 
              this.setState({
                redClass: ''
              }
              )} , 550)
            break;
          case 2:
            ReactDOM.findDOMNode(this.audioElement2).play()
            this.setState({
              blueClass: 'active'
            })
            setTimeout(() => {
              this.setState({
                blueClass: ''
              }
              )}, 550)
            break;
          default:
            ReactDOM.findDOMNode(this.audioElement3).play()
            this.setState({
              yellowClass: 'active'
            })
            setTimeout(() => {
              this.setState({
                yellowClass: ''
              }
              )}, 550)
            break;
        }
      setTimeout(() => { 
        this.playSequence(sequence.slice(1))
      }, 650)
    } else if (sequence.length === 0) {
      this.setState({
        outputMode: false,
      })
    }
  }

  handleClick = (button, audioRef) => {
    ReactDOM.findDOMNode(audioRef).play()
    switch (button) {
      case 0:
        this.setState(prevState => ({
          playerInput: [...prevState.playerInput, 0],
          greenClass: 'active'  
        }))
        setTimeout(() => {
          this.setState({
            greenClass: ''
          })
        }, 550)
        break;
      case 1:
        this.setState(prevState => ({
          playerInput: [...prevState.playerInput, 1],
          redClass: 'active'  
        }))
        setTimeout(() => {
          this.setState({
            redClass: ''
          })
        }, 550)
        break;
      case 2:
        this.setState(prevState => ({
          playerInput: [...prevState.playerInput, 2],
          blueClass: 'active'
        }))
        setTimeout(() => {
          this.setState({
            blueClass: ''
          })
        }, 550)
        break;
      default:
        this.setState(prevState => ({
          playerInput: [...prevState.playerInput, 3],
          yellowClass: 'active'
        }))
        setTimeout(() => {
          this.setState({
            yellowClass: ''
          })
        }, 550)
        break;
    }
    this.checkInput()
  }

  checkInput = () => {
    const sequence = this.state.gameSequence
    const input = this.state.playerInput

    input.forEach((item, index) => {

      if (item !== sequence[index - 1]) {
        this.setState({
          playerInput: []
        })
        setTimeout(() => {
          this.playSequence(this.state.gameSequence)
         }, 0)
      } 
    })
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
          className={this.state.greenClass}
          ref={(greenButton) => {this.greenButtonRef = greenButton}}
          onClick={!this.state.outputMode ? 
                  (e) => {this.handleClick(0, this.audioElement0)} :
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
          ref={(redButton) => {this.redButtonRef = redButton}}
          onClick={!this.state.outputMode ? 
                  (e) => {this.handleClick(1, this.audioElement1)} :
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
          ref={(blueButton) => {this.blueButtonRef = blueButton}}
          onClick={!this.state.outputMode ?
                  (e) => {this.handleClick(2, this.audioElement2)} :
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
          ref={(yellowButton) => {this.yellowButtonRef = yellowButton}}
          onClick={!this.state.outputMode ? 
                  (e) => {this.handleClick(3, this.audioElement3)} : 
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

export function generateNumber () {
  const min = 0
  const max = 3
  return Math.floor(Math.random() * (max - min + 1)) + min
}
