import React, { useContext, useEffect, useState } from 'react'
import ScoreTracker from '../../services/ScoreTracker'
import { XIcon } from 'lucide-react'
import { ModeContext } from '../../contexts/ModeContext'

function ScoreHistory({close, scores}) {
  // const {clearScoreBoard} = ScoreTracker()
  // const updateScores=()=>{
  //   const storedScores = JSON.parse(localStorage.getItem("scoreboard")) || []
  //   setScores(storedScores);
  //   setCount(prev=>prev+=1);
  // }
  
// console.log(scores)
  return (
    <div style={{background:"#f0e4d6", width:"437px", height:"100vh", zIndex:"100",top:"0", position:"absolute",left:"70%",borderRadius:"5px", border:"1px solid black", transition:"ease-in", }}>
        {/* {scores} */}
        <header style={{display: "flex", justifyItems:"center", textAlign:'center', gap:"30%" }}>
          <div onClick={close} style={{cursor:"pointer"}}>
            <XIcon size={30}/>
          </div>
          <p style={{fontSize:"18px",fontWeight:"600"}}>
            Scoreboard
          </p>
        </header>
        <div style={{padding:"20px", background:"#fff", margin:"5px", borderRadius:"5px"}}>  
        <table style={{width:"100%",}}>
          <thead>
            <tr>
              <th>#</th>
              <th>Mode</th>
              <th>Moves</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr> */}
            {scores?.map((score, index) => (
                        <tr key={index}>
                          <td>{index+1}</td>
                          <td>
                            {score.mode}
                          </td>
                          <td>
                            {score.moves}
                          </td>
                          <td>
                            {score.time} s
                          </td>
                        </tr>
                    ))}
            {/* </tr> */}
          </tbody>
        </table>
        </div>
        
    </div>
  )
}

export default ScoreHistory