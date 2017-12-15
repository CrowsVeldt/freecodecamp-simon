# freecodecamp-simon
Simon, the game, built with React and styled-components for the FreeCodeCamp front end track.

[You can try it out here!](https://crowsveldts-simon-game.surge.sh)

[freeCodeCamp Project Page](https://www.freecodecamp.org/challenges/build-a-simon-game)

## User Stories:

- I am presented with a random series of button presses.
- Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.
- I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.
- If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.
- I can see how many steps are in the current series of button presses.
- If I want to restart, I can hit a button to do so, and the game will return to a single step.
- I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.
- I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.


# After Thoughts:

- React has continued to be very intuitive, even for someone without a lot of experience. In the few instances where I hit a wall it was due to my lack of understanding of the "React way". For me this is a postive aspect, as having a very opinionated framework helps me keep my mental model of the project consistent.
- I am sure there are better (and less stateful) ways to achieve the same result, but nevertheless I succeeded in my own clunky way. As a result of the very stateful implementation I arrived at I think I can see, even at this small scale, how state management warrents the use of an additional framework. As such, for my next project I will make sure to familiarize myself with such a tool.
- Testing: Although I don't have anything approaching full test coverage, I have managed to include some test writing in my workflow. Even the small number of tests that I have gives me more confidence in my code, although there is clearly room for improvement. I think that I better undrestand how to write testable code, and I'm pretty confident I'll be able to do better for my next project. 
- Overall: I am very satisfied with what I have achieved with this project. In just under two weeks, and working in the cracks of spare time and energy available, I have fulfilled all the user stories. More importantly, I feel that I substantially understand my entire codebase (which hasn't always been true), so I feel confident that I can fix any bugs that remain. 
