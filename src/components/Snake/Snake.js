import React, { useState, useEffect } from 'react';

import styles from './Snake.module.css'
import SnakeRow from './SnakeRow/SnakeRow'
//import Square from './Square/Square'

const Snake=(props)=>{

    
    const [headNode, setHead]=useState([4,4]);
    const [direction, setDirection]=useState("R");
    const [foodNode, setFoodNode]=useState(randomPair)

    //console.log(foodNode)
    
    function randomPair(){
        let pair=[]

        for(let x=0; x<2; x++){

            pair.push(Math.floor(Math.random()*6)+1)

        }

        console.log(pair)

        return pair

    }

    let rowLayout=[];   
    let rowNum=1;
    let grid=[];



    useEffect(()=>{

        // window.addEventListener('keydown', e=>{

        //     handleKeyDown(e)

        // })


        const interval = setInterval(()=>{
            // let changeArr=[headNode]
            // if(direction==="U"){
            //     changeArr=[headNode[0],headNode[1]-1]
            // }else if(direction==="D"){
            //     changeArr=[headNode[0],headNode[1]+1]
            // }else if(direction==="L"){
            //     changeArr=[headNode[0]-1, headNode[1]]
            // }else if(direction==="R"){
            //     changeArr=[headNode[0]+1, headNode[1]]
            // }
            setDirection((direction)=>direction)
            console.log(direction)
            setHead((headNode)=> {
                if(direction==="U"){
                    return [headNode[0],headNode[1]-1]
                }else if(direction==="D"){
                    return [headNode[0],headNode[1]+1]
                }else if(direction==="L"){
                    return [headNode[0]-1, headNode[1]]
                }else if(direction==="R"){
                    return [headNode[0]+1, headNode[1]]
                }
            })
        },1000)
        return()=>clearInterval(interval);


       


    },[])

    window.addEventListener('keydown', e=>{

        handleKeyDown(e)

    })

    const handleKeyDown=e=>{
        const newDirection=getDirection(e.key);

        if(newDirection !== ''){
            setDirection(newDirection);
        }

        
    }



    function getDirection(key){


        if(key==='ArrowUp'){
            //setDirection("U")
            //console.log(direction)
            return "U"
        }else if(key==='ArrowDown'){
            //setDirection("D")
            //console.log(direction)
            return "D"
        }else if(key==='ArrowLeft'){
            //setDirection("L"
            return "L"
        }else if(key==='ArrowRight'){
            //setDirection("R")
            return "R"
        }else{
            return ''
        }

    }



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

            {/* <div onKeyDown={checkKey}/> */}
        </div>

    );

}

export default Snake;