import React from 'react'
import './card.css'
function Card({card, onClick}) {
//    console.log(card)
  return (
    <div className={`card ${card.isFlipped ? 'flip':''}`} onClick={onClick}>
        <div className='back'>
            
        </div>
        <div className='front'>
            {/* {card.name} */}
            {/* {card.isFlipped} */}
            <img src={card.image} alt='img' className='img'/>
        </div>
    </div>
  )
}

export default Card