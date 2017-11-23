import React from 'react'
import ReactDOM from 'react-dom'
import ColorButton from './ColorButton'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ColorButton />, div)
})
