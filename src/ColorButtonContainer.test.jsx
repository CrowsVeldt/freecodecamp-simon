import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import ColorButtonContainer from './ColorButtonContainer'

describe('the ColorButtonContainer component', () => {
  
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ColorButtonContainer />, div)
  })

  test('renders correctly', () => {
    const tree = renderer.create(<ColorButtonContainer />)
    expect(tree).toMatchSnapshot()
  })

})
