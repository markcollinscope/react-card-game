# react-card-game

## Introduction
Simple card game demonstrating basic use of React in JS. Supports the ARM article here: XXXX.

## Requirement
The requirement for this (admittedly not very exciting) game is:
* user should be able to 'draw' cards (values: Ace - 11, Picture cards - 10, others - face value).
* they can continue to do this until they 'bust' the 21 points limit.
* at this point their 'high score' is updated with the number of cards they got *before* going bust (if greater than previous).
* once bust, they can choose to play again if they wish, keeping the high score to date.
Visually:
* the high score at top right; 
* card playing area below; running total of game below that


## Source code structure
The dependency structure of the code is as follows (an acyclic graph of imports):

```
                                              __________ Interface __________ See ARM article
    App
    |  |-----> CardHandView
    |            |   |--------->CardView
    |            |               |
    |            |               |           __________ Application __________  See ARM article
  GameEngine     |               |
    |            |               |
    |            |               |           __________ Domain __________  See ARM article
    |            V               |           
    |--------> CardHand          |
    V            |               |
  Deck           |                  V
(REST API)       |------------->Card      
                                 |
                                 |
                                 |           __________ Infrastructure __________  See ARM article
                                 |
                               utils
                                             __________ Platform __________  See ARM article
           .     .
           .     .
           |.....|
              |
              V
            React (all "View" and App depend on this)....
```

## Discussion
Although simple, there are design issues to consider in this application:
* mapping cards to numeric values - should the mappting be held in Card or GameEngine (or...)?
* should React components (CardHandView, CardView, etc) depend on Domain objects, or should they be completely detached?

Other points to note:
* the REST API is hidden in the Deck object (well, as hidden as async, await allows ...)
* there's a one-to-one correspondence between major Domain Objects and correspding UI Components.

