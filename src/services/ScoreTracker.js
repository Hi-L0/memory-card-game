import React, { useEffect, useState } from 'react'

function ScoreTracker() {
    const [scores,setScores] = useState([])


    const saveScore = (score)=>{
        // localStorage.setItem('score',JSON.stringify(score.moves))
        // localStorage.setItem('time',JSON.stringify(score.time))
        // localStorage.setItem('scoreboard',JSON.stringify(scores))

        setScores(prev=>[...prev,score])
        // console.log(scores)
    }
    const getScores = ()=>{
        const scc = localStorage.getItem('scoreboard');
        const sccb = JSON.parse(scc)
        return sccb
    }

    const clearScoreBoard=()=>{
        localStorage.clear();
    }
    useEffect(()=>{
        // JSON.parse(localStorage.getItem("score"),localStorage.getItem("time"))
        localStorage.setItem('scoreboard',JSON.stringify(scores))
        // console.log(getScores())
    },[scores])
  return {
    saveScore,
    getScores,
    clearScoreBoard,
  }
}

export default ScoreTracker