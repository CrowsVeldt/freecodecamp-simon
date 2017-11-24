import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import ColorButton from './ColorButton'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ColorButton />, div)
})

it('renders correctly', () => {
  const tree = renderer
    .create(<ColorButton topLeft />)
  expect(tree).toMatchSnapshot()
})
