import React, { useContext, useEffect, useState } from 'react'
import './frame.css'
import Card from '../card/Card'
// import { cards } from '../../data/cards';
import Header from '../header/Header';
import { ModeContext } from '../../contexts/ModeContext';
import Setting from '../setting/Setting';
import { Settings, XIcon} from 'lucide-react';
import ScoreTracker from '../../services/ScoreTracker';
import { getData } from '../../services/GetData';



function Frame({closeScoreBoard}) {
    const {mode ,frameWidth, setFrameWidth, bgColor} = useContext(ModeContext)
    const [m_cards, setCards]= useState([])
    const [moves, setMoves] = useState(0);
    const [firstCard, setFirstCard] = useState(null)
    const [secondCard, setSecondCard] = useState(null)
    const [isOpen, setIsOpen]=useState(false)
    // const [mode,setMode]= useState(4);
    
    const [stopClick, setStopClick]= useState(false)
    //if the game is complete
    const [isComplete, setIsComplete] = useState(false);
    const [macthCounter, setMatchCounter]= useState(0)
    
    //time in seconds
    const [seconds ,setSeconds] = useState(0)
    const [timer, setTimer] = useState(null);


    //score save
    const {saveScore} = ScoreTracker();

    //getting cards data
    const [cardsData, setCardsData]=useState([])

    const fetchCards= async ()=>{
      const data = await getData();
      setCardsData(data);
    }


    function resetGame() { 
      if (cardsData.length === 0) {
        console.warn('Cards data not loaded yet');
        return;
      }
      let matched_cards = cardsData.filter((item,index)=>{
            if(item.id<=mode){
                return item;
            }
        });
        let rand_cards = matched_cards.sort(() => 0.5 - Math.random());
        // console.log(rand_cards)
        // console.log(matched_cards)
        setCards(rand_cards);
        setMoves(0);
        setFirstCard(null)
        setSecondCard(null)
        setIsComplete(false)
        setMatchCounter(0)
        setSeconds(0)
        clearInterval(timer); 
        setTimer(null);
        setIsOpen(false);
    }

    const startTimer = () => {
        if (!timer) {
          const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
          }, 1000);
          setTimer(interval);
        }
    };

    const handleClick= (clickedCard)=>{
        setIsOpen(false);
        if (stopClick || clickedCard.isFlipped || clickedCard.matched) return;
        setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === clickedCard.id
                ? { ...card, isFlipped: true }
                : card
            )
          );

          if (moves >= 0) {
            startTimer();
            closeScoreBoard();
          }

          if (!firstCard) {
            setFirstCard(clickedCard);
          } else {
            setSecondCard(clickedCard);
            setMoves((prevMoves) => prevMoves + 2);
            setStopClick(true);
          }

        
        // //reflipp it after 1200 ms
        // setTimeout(()=>{
        //     setCards(prev=> prev.map(card=>card.id == clickedCard.id && card.isFlipped && !card.matched
        //             ?{ ...card,
        //                 isFlipped:false}
        //                 :card))
            
        // },1500)
        
    }

    // const changeMode=(e)=>{
    //     setMode(e.target.value)
    // }

    const resetSelection = ()=>{
        setStopClick(false);
        setFirstCard(null);
        setSecondCard(null);
        
    }



    useEffect(()=>{
        
    // 
    if (firstCard && secondCard) {
        if (firstCard.name === secondCard.name) {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.name === firstCard.name ? { ...card, matched: true } : card
            )
          );
          setTimeout(()=>
            {
                setMatchCounter(prev=>prev+=2);
            },1300)
          resetSelection();
        } else {
          setTimeout(() => {
            setCards((prevCards) =>
              prevCards.map((card) =>
                card.id === firstCard.id || card.id === secondCard.id
                  ? { ...card, isFlipped: false }
                  : card
              )
            );
            resetSelection();
          }, 1000);
        }
      }
    }, [firstCard, secondCard]);

    

    useEffect(() => {
        if (macthCounter === m_cards.length) {
          setIsComplete(true);
          clearInterval(timer); //for stoping the timer
        //   setScore(prev=>({...prev,moves:moves,time:seconds}))
            if(moves!=0){
                saveScore({moves,time:seconds,mode});
            }
        //   console.log(seconds)
        }
      }, [macthCounter, m_cards.length]);

    useEffect(() => {
        resetGame();
        // if(!timer){
        //     const interval = setInterval(() => {
        //         setSeconds(prevSeconds => prevSeconds + 1); // Increment seconds every second
        //     }, 1000); // 1000 milliseconds = 1 second
        //     setTimer(interval)
        // }
        // return () => clearInterval(interval); // Cleanup interval on component unmount
        
        if(mode == 16){
            setFrameWidth(800)
        }
        else if(mode == 32){
            setFrameWidth(1200)
        }else{
            setFrameWidth(400)
        }
        // setBgColor()
    
    }, [mode]);

    
    useEffect(()=>{
      if (cardsData.length > 0) {
        resetGame(); // Automatically reset game when data is loaded
      }
    },[cardsData])

    //loading data once
    useEffect(()=>{
      fetchCards()
    },[])
    
    // console.log(mode,frameWidth)
  return (
    <div >
        <div className='settings' title='settings'>
            { !isOpen
                ? <Settings size={30} onClick={()=>setIsOpen(prev=>!prev)} style={{cursor:"pointer"}}/>
                : <XIcon size={30} style={{cursor:"pointer"}} onClick={()=>setIsOpen(prev=>!prev)}/>
            }
        </div>
            <Setting isOpen={isOpen} resetGame={()=>resetGame()} />
        {/* <input type="color" /> */}
        <Header number_of_moves={moves} reset={()=>resetGame()} seconds={seconds} isDisabled={moves>0 && !isComplete ? true : false}/>
        <div className={`frame-wrapper ${isComplete?"flip":''} `}>    
            <div className='frame' style={{gridTemplateColumns:`repeat(${Math.sqrt(mode)}, 1fr)`, width:`${frameWidth}px`, background:`linear-gradient(226deg, ${bgColor} 20%, #fff 84% 84%)`, display:`${isComplete?"none":""}` }}>
                {
                    m_cards.map((c,index)=>
                        <div key={index} className=''>
                            <Card card={c} onClick={() => handleClick(c)}/>
                        </div>
                    )
                }
            {/* <Card fliped={isFliped} onClick={(e) => handleClick(e)}/>
            <Card/>
            <Card/>
            <Card/> */}

            {/* <Card/>
            <Card/> */}
            
            </div>
            {isComplete && cardsData.length>0
                ?<div className='frame-back' style={{width:`${frameWidth}px`}}>
                    <div className='content'>
                        <p>
                            You won
                        </p>
                        <p>
                            with {moves} moves
                        </p>
                        <p>
                            in {seconds} seconds 
                        </p>
                    </div>
                </div>
                :<></>}
        </div>
    </div>
  )
}

export default Frame