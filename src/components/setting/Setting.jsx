import React, { useContext, useEffect, useState } from 'react'
import { ModeContext } from '../../contexts/ModeContext';

function Setting({isOpen, resetGame}) {
    const {mode,setMode, bgColor,setBgColor}= useContext(ModeContext);
    // const [bgColor, setColor]=useState('')
    useEffect(()=>{
        setBgColor(bgColor);
    },[])
    if(!isOpen) return;
    // console.log(bgColor)
    return (
        <div style={{border:"1px solid black" ,backgroundColor:"#ffff", height:"auto", width:"200px",position:"absolute",margin:"auto",paddingTop:"10px", borderRadius:"5px", gap:"5px",right:"65%",zIndex:"10" }}>
            {/* <p style={{marginRight:"10px"}}> */}
            <div>
                modes : 
            {/* </p> */}
                <select
                    id="dropdown"
                    value={mode}
                    onChange={(e)=>{setMode(e.target.value); resetGame()}}
                    style={{height: "30px", width:"70px", textAlign:"center"}}
                >
                    {/* <option value="">--Select an option--</option> */}
                    <option value={4}>4 (2x2)</option>
                    <option value={16}>16 (4x4)</option>
                    {/* <option value={32}>32</option> */}
                </select>
            </div>
            <div>
                Background:
                <input type='color' value={bgColor} style={{margin:"10px"}} onChange={(e)=>setBgColor(e.target.value)}/>
            </div>
        </div>
    )
}

export default Setting