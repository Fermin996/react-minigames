import React, {useState} from "react";

import styles from './TicTacToe.module.css';
import BoardRow from "./BoardRow/BoardRow"
import { useEffect } from 'react';

const TicTacToe=(props)=>{

    const [count, setCount]=useState(0)
    const [gameState, setGameState]=useState(['','','','','','','','',''])

    const winningConditions=[
        [0,1,2],[3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
    ]

    let mockState=gameState;

    let handleCallBack=(cellNum, move)=>{
       setCount(count+1);
       mockState[cellNum-1]=move;
       setGameState(mockState)

       console.log(gameState)

       let indices=[];

       //here im trying to compare the array state indices of either X or O
       //with the arrays containing winning indices for each player.
       //to re-evaluate whether a player has won after any move.

       if(count%2===0){


        let idx = gameState.indexOf('X');
        while(idx !== -1){
            indices.push(idx);
            idx= gameState.indexOf('X',idx+1);
        }

        //console.log(indices+" i am the index of x")

        for(let x=0; x<winningConditions.length; x++){

           let condtnPointer=winningConditions[x];

           for(let i=0; i<indices.length; i++){

            if(condtnPointer.indexOf(indices[i])!==-1){

                condtnPointer.splice(condtnPointer.indexOf(indices[i]),1);

                //console.log(indices[i])
                
                if(condtnPointer.length===0){
                    console.log("You won")
                    return
                }

            }

           }

           
            

        }

       }else{

        let idx = gameState.indexOf('O');
        while(idx !== -1){
            indices.push(idx);
            idx= gameState.indexOf('O', idx+1);
        }


        for(let x=0; x<winningConditions.length; x++){
            
            let condtnPointer=winningConditions[x];

            for(let i=0; i<indices.length; i++){
 
             if(condtnPointer.indexOf(indices[i])!==-1){
 
                 condtnPointer.splice(condtnPointer.indexOf(indices[i]),1);
                 
                 if(condtnPointer.length===0){
                     console.log("You won")
                     return
                 }
 
             }
 
            }            

        }

       }
       
        

    }

    // useEffect(()=>{
        
    // },[])
    

    return(
        <div className={styles.ticBoard}>

            <BoardRow moveNum={count} callBack={handleCallBack} rowNum={0} move={''}></BoardRow>
            <BoardRow moveNum={count} callBack={handleCallBack} rowNum={1} move={''}></BoardRow>
            <BoardRow moveNum={count} callBack={handleCallBack} rowNum={2} move={''}></BoardRow>

        </div>
    )

}

export default TicTacToe;