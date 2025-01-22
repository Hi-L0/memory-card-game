import { createContext, useState } from "react";

export const ScoreBoardContext = createContext();


function ScoreBoardProvider({children}) {
    const [scores,setScores] = useState([])

  return (
    <ScoreBoardContext.Provider value={{scores,setScores}}>
        {children}
    </ScoreBoardContext.Provider>
  )
}

export default ScoreBoardProvider