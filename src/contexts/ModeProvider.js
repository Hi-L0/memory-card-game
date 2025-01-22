import React, { useState } from 'react'
import { ModeContext } from './ModeContext';

function ModeProvider({children}) {
    const [mode , setMode]= useState(4);
    const [frameWidth, setFrameWidth]=useState(400)
    const [bgColor, setBgColor] = useState("#B4DD13")
  return (
    <ModeContext.Provider value={{mode, setMode, frameWidth, setFrameWidth, bgColor, setBgColor}}>
        {children}
    </ModeContext.Provider>
  )
}

export default ModeProvider