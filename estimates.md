# Estimates

(This is a place for my rough estimates for the project, I'll compare them to the reality when I finish)

Line Count Par  (try to get in under this number): 400 lines, not including node modules, config files, and registerServiceWorker
# Components:

## App, Estimate: 10 hours
- State:
1. gameSequence: array of numbers between 1 and 4
2. gameType: normal || strict
3. currentMode: input || output

- Methods:
1. toggleStrictMode
2. playGame
3. checkInput
4. endGame

## ColorButton, Estimate: 1 hour

  All it has to do is light up and play a tone when activated, and pass the event back to the parent

## FunctionButton, Estimate: 1 hour
- strict
- start
- restart

  All these have to do is pass the events to the parent, as well. Really, start and restart may as well be the same button.

  ## StepCounter, Estimate: 1 hour
  - Display the number of steps in the current sequence
  - Display "--" on failure