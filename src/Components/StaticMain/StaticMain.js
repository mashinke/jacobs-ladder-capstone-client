import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './StaticMain.css'

export default function StaticMain(props) {
  return (
    <main className='base static'>
      <Route exact path='/rules'>
        {({ match }) => {
          console.log(match)
          return (
            <CSSTransition
              in={(match !== null)}
              timeout={1000}
              classNames='article'
              unmountOnExit
              onEnter={() => console.log('entering rules')}
            >
              <article id='rules' className='staticArticle'>
                <h2>Rules</h2>

                <h3>The Game Board</h3>
                <p>The game board has a number of spaces that are divided into stages. The player begins as Jacob asleep in the desert, and uses the power of knowledge and Torah to ascend to the heavens.</p>
                <h3>Challenge Cards</h3>
                <p>The challege cards are divided into two categories: roll cards and skip cards.</p>
                <p>Roll cards consist of the letters of the Alef Beys which the player must correctly identify to advance.</p>
                <p>Skip cards consist of vocabulary words that the player must translate.</p>
                <h3>Dice</h3>
                <p>
                  The game has one virtual ten-sided die, that is cast once per turn</p>
                <h3>Gameplay</h3>
                <p>Each turn, the player receives an roll card with a question. If they answer the question correctly, they can cast the die and move the number of spaces indicated by the die. If they answer incorrectly, they lose the turn.</p>
                <p>At the beginning of any turn, the can choose to try a skip card. If they answer it correctly, they can skip to the next stage. If they answer incorrectly, they lose the turn and can no longer play a skip card until they advance another stage.</p>
                <h3>End game</h3>
                <p>When the player reaches the end of the last stage, they must correctly answer a skip card to finish the game. If they answer incorrectly, they must try again on their next turn. The player will remain on the last space on the last stage until they correctly answer a skip card.</p>
                <p>
                  Any player who answers the final card wins the game.</p>
              </article>
            </CSSTransition>
          )
        }}
      </Route>
      <Route exact path='/'>
        {({ match }) => {
          console.log(match)
          return (
            <CSSTransition
              in={(match !== null)}
              timeout={1000}
              classNames='article'
              unmountOnExit
              onEnter={() => console.log('entering home')}
            >
              <article className='staticArticle' id='home'>
                <h2>About the Game</h2>
                <p>My daughter and I created the rules for this game in 2019 as an experiment in language learning. </p>
                <p>Jacob's Ladder is inspired by racing board games such as Snakes and Ladders and Candyland, and originally
                    conceived as a board game. Here it is, adapted to a 
                    browser-based web app!</p>
              </article>
            </CSSTransition>
          )
        }}
      </Route>
    </main>
  )
}