import React from 'react'
import ModeProvider from '../../contexts/ModeProvider'
import ScoreBoardProvider from '../../contexts/ScoreBoardProvider'
import Game from '../game/Game'

function Main() {
  return (
    <ModeProvider>
        <ScoreBoardProvider>
          <Game/>
        </ScoreBoardProvider>
      </ModeProvider>
  )
}

export default Main