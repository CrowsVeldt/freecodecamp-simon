import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import App, {generateNumber} from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<App />)
  expect(tree).toMatchSnapshot()
})

it('generates a random number between 0 and 3', () => {
  const arrayOfRandoms = []
  for (let i = 0; i < 100; i++) {
    arrayOfRandoms.push(generateNumber())
  }
  arrayOfRandoms.map(item => {
    expect(item).toBeLessThan(4)
  })

})
