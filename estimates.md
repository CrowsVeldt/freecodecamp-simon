# Estimates

(This is a place for my rough estimates for the project, I'll compare them to the reality when I finish)

## Line Count Par:
 400 lines, not including node modules, config files, and registerServiceWorker
(actual count: 474 including tests, 407 without. Not bad)

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

  All these have to do is pass the events to the parent, as well.

## StepCounter, Estimate: 1 hour
- Display the number of steps in the current sequence
- Display "--" on failure

## Total: 13 hours

- Nov 22nd: 6 minutes
- Nov 23rd: 51 minutes
- Nov 24th: 53 minutes 
(lost track because I forgot to configure WakaTime to work with the editor (facepalm)
