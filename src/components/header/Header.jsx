import React from 'react'

function header({number_of_moves, reset,seconds, isDisabled}) {
  // const reset= ()=>{

  // }
  return (
    <div style={{borderRadius:"5px", width:"400px",padding:"10px" ,margin:"auto" }}>
      <div style={{
          display:"flex", 
          gap:"40%"
                  // justifyContent:"space-between",
                  }}>
        <button style={{width:"25%",borderRadius:"5px", fontSize:"20px", fontWeight:"700", color:`${isDisabled?"#c5c5c5":"#fff"}`, backgroundColor:"gray", cursor:"pointer" }} onClick={reset} disabled={isDisabled}>
          Start
        </button>
        <div style={{fontSize:"18px", fontWeight:"700"}}> 
          <p>
            {number_of_moves} moves
          </p>
          <p>
            time: {seconds} sec
          </p>
        </div>
      </div>
    </div>
  )
}

export default header