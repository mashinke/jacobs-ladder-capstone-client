# Jacob's Ladder - RESTful API client

## About the Game
My daughter and I created the rules for this game in 2019 as an experiment in 
language learning.

Jacob's Ladder is inspired by racing board games such as Snakes and Ladders and
Candyland, and originally conceived as a board game.

This is the repository for the RESTful client. To see the server code and learn
about the API, please visit the 
[server repository on GitHub](https://github.com/mashinke/jacobs-ladder-server).


## Rules

The rules of the game are simple.

### The Game Board

The game board has a number of spaces that are divided into stages. The player
begins as Jacob asleep in the desert, and uses the power of knowledge and Torah
to ascend to the heavens.

### Challenge Cards

The challege cards are divided into two categories: roll cards and skip cards
(see more on those below). 
In the first difficulty level, roll cards consist of the letters of the Alef 
Beys which the player must correctly identify to advance.

Skip cards consist of vocabulary words that the player must translate.

### Dice

The game has one virtual ten-sided die, that is cast once per turn.

### Gameplay

Each turn, the player may take a roll card with a question. If they answer the
question correctly, they can cast the die and move the number of spaces 
indicated by the die. If they answer incorrectly, they lose the turn.

Alternately, the player may choose to take a skip card. If they answer it 
correctly, they advance the number of spaces in a stage. If they answer 
incorrectly, they lose the turn and can no longer chose a skip card until
they advance another stage.

### End game

When the player reaches the end of the last stage, they must correctly answer
a skip card to finish the game. If they answer incorrectly, they must try again
on their next turn. The player will remain on the last space on the last stage
until they correctly answer a skip card.

Any player who answers the final card correctly wins the game.
