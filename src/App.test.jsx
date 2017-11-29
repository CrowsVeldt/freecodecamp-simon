import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import App, {generateNumber} from './App'

// Organize the code into describe blocks

describe('The App component', () => {
  
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  test('renders correctly', () => {
    const tree = renderer.create(<App />)
    expect(tree).toMatchSnapshot()
  })
})


describe('generateNumber', () => {

  const arrayOfRandoms = []

  for (let i = 0; i < 100; i++) {
    arrayOfRandoms.push(generateNumber())
  }

  test('always returns a number', () => {
    arrayOfRandoms.map(item => {
      expect(typeof item).toBe('number')
    })
  })

  test('always returns a whole number', () => {
    arrayOfRandoms.map(item => {
      expect(item % 1).toBe(0)
    })
  })

  test('does not return any number greater than 3', () => {
    arrayOfRandoms.map(item => {
      expect(item).toBeLessThan(4)
    })
  })

  test('does not return any number less than 0', () => {
    arrayOfRandoms.map(item => {
      expect(item).toBeGreaterThanOrEqual(0)
    })
  })
})
