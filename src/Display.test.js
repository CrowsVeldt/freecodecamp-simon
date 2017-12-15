import Display from './Display'
import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

describe ('the Display component', () => {

  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Display />, div)
  })

  test('renders correctly', () => {
    const tree = renderer.create(<Display />)
    expect(tree).toMatchSnapshot()
  })

})
