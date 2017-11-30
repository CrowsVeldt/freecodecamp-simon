import ColorButton from './ColorButton'
import React, { Component } from 'react'

class ColorButtonContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      greenButtonActive: false,
      redButtonActive: false,
      blueButtonActive: false,
      yellowButtonActive: false
    }
  }

  activateButton = (num) => {
    switch (num) {
      case 1:
        this.audioElement1.play()
        this.setState({
          greenButtonActive: true
        })
        break;
      case 2:
        this.audioElement2.play()
        this.setState({
          redButtonActive: true
        })
        break;
      case 3:
        this.audioElement3.play()
        this.setState({
          blueButtonActive: true
        })
        break;
      default:
        this.audioElement4.play()
        this.setState({
          yellowButtonActive: true
        })
        break;
    }    
  }

  render () {

    return (

      <div className='colorButtonContainer'>
        <ColorButton
          className='greenButton'
          green
          active={this.state.greenButtonActive}
          onClick={() => { this.activateButton(1) }}
        />
        <audio ref={(audio1) => { this.audioElement1 = audio1 }}>
          <source src={'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'} />
        </audio>

        <ColorButton
          className='redButton'
          red
          active={this.state.redButtonActive}
          onClick={() => { this.activateButton(2) }}
        />
        <audio ref={(audio2) => { this.audioElement2 = audio2 }}>
          <source src={'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'} />
        </audio>

        <ColorButton
          className='blueButton'
          blue
          active={this.state.blueButtonActive}
          onClick={() => { this.activateButton(3) }}
        />
        <audio ref={(audio3) => { this.audioElement3 = audio3 }}>
          <source src={'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'} />
        </audio>

        <ColorButton
          className='yellowButton'
          yellow
          active={this.state.yellowButtonActive}
          onClick={() => { this.activateButton(4) }}
        />
        <audio ref={(audio4) => { this.audioElement4 = audio4 }}>
          <source src={'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'} />
        </audio>
      </div>
    
    )
  
  }

}

export default ColorButtonContainer
