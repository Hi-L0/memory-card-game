import React, { useContext, useEffect, useState } from 'react'
import Frame from '../gameframe/Frame'
import './game.css'
import { ModeContext } from '../../contexts/ModeContext'
import { History } from 'lucide-react'
import ScoreHistory from '../history/ScoreHistory'
import ScoreTracker from '../../services/ScoreTracker'
import { ScoreBoardContext } from '../../contexts/ScoreBoardProvider'




function Game() {
    const {bgColor, mode} = useContext(ModeContext)
    const [isOpen, setisOpen] = useState(false)
    const {scores, setScores}=useContext(ScoreBoardContext)
    const {getScores} = ScoreTracker()
    useEffect(()=>{
        const storedScores = getScores()
        setScores(storedScores);
    },[isOpen])
   

  return (
    
        <div style={{width:"100%",top:"0",height:`${mode==4?"100vh":"200vh"}`, background:`linear-gradient(226deg, #FFF 0%,${bgColor} 84% 84%)`}}>
            <div className='title-game'>
                Memory Card
            </div>
            <div style={{position:"absolute", right:"35%", cursor:"pointer", marginTop:"5px"}} onClick={()=>setisOpen(prev=>!prev)} title='history'>
                <History size={30}/> 
            </div>
            {isOpen?<div>
                <ScoreHistory close={()=>setisOpen(false)} scores={scores} />
            </div>:<></>}
            <Frame closeScoreBoard={()=>setisOpen(false)}/>
        </div>

  )
}

export default Game