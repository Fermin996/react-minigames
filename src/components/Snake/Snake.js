import React, { useState, useEffect, useRef } from 'react';
//import { useInterval } from 'usehooks-ts';

import styles from './Snake.module.css'
import SnakeRow from './SnakeRow/SnakeRow'
//import Square from './Square/Square'

const Snake=()=>{

    
    const [headNode, setHead]=useState([4,4]);
    const [direction, setDirection]=useState("R");
    const [foodNode, setFoodNode]=useState(randomPair)

    
    function useInterval(callback, delay) {
        const savedCallback = useRef();
      
        // Remember the latest callback.
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        // Set up the interval.
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
      }

    
    function randomPair(){
        let pair=[]

        for(let x=0; x<2; x++){

            pair.push(Math.floor(Math.random()*6)+1)

        }

        return pair

    }

    let rowLayout=[];   
    let rowNum=1;
    let grid=[];

    useEffect(()=>{
        window.addEventListener('keydown', e=>{

            handleKeyDown(e)
    
        });
    },[])

   

    const handleKeyDown=e=>{
        const newDirection=getDirection(e.key);

        //console.log(newDirection)

        if(newDirection !== ''){
            setDirection(newDirection);
        }

        
    }



    function getDirection(key){

        console.log(direction)

        if(key==='ArrowUp' && direction !== "D"){
            //setDirection("U")
            //console.log(direction)
            return "U"
        }else if(key==='ArrowDown' && direction !== "U"){
            //setDirection("D")
            //console.log(direction)
            return "D"
        }else if(key==='ArrowLeft' && direction !== "R"){
            //setDirection("L"
            return "L"
        }else if(key==='ArrowRight' && direction !== "L"){
            //setDirection("R")
            return "R"
        }else{
            return ''
        }

    }


    useInterval(()=>{
        if(direction==="U"){
            setHead([headNode[0], headNode[1]-1])
        }else if(direction==="D"){
            setHead([headNode[0], headNode[1]+1])
        }else if(direction==="L"){
            setHead([headNode[0]-1, headNode[1]])
        }else if(direction==="R"){
            setHead([headNode[0]+1, headNode[1]])
        }
      }, 300)



    while(rowNum<8){

        for(let x=1; x<8; x++){

            rowLayout.push([x,rowNum]);

        }

        grid.push(rowLayout);
        rowNum++;
        rowLayout=[];

    }

    let container=[]

    grid.forEach((row, id)=>{
        container.push(<SnakeRow key={id} thisRow={row} headCoord={headNode} foodCoord={foodNode} />)
    });


    return(
        
        
        <div className={styles.gridCont}>
            {container}
        </div>

    );

}

export default Snake;