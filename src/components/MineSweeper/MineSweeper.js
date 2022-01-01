import React, { useState } from 'react';

import styles from './MineSweeper.module.css';

const MineSweeper=()=>{

    const [grid, setGrid]=useState(createGrid) 

    function mineProb(row, cell){
        if((row<=5 && cell<=5)||(row>=5&& cell>=5)){
      
          if(Math.random()*100<15){
            return "Y"
          }else{
            return "N"
          }
        }else if((row>=5&& cell<=5)||row<5 && cell>=5){
          if(Math.random()*100<7){
            return "Y"
          }else{
            return "N"
          }
        }
      
      }

      
    function createGrid(){


        let gridArr=[]
        let mineCount=10;

        //Creating grid using double for loop


        for(let x=0; x<9; x++){

            let currentRow=[]
        

            for(let i=0; i<9; i++){            
                currentRow.push([mineProb(x,i),0,"concealed"])
            }

            gridArr.push(currentRow);

        }


        for(let z=0; z<gridArr.length; z++){

            for(let y=0; y<gridArr[z].length; y++){

                if(gridArr[z][y][0]==="Y"){
                    //evaluating if the cell is a mine
                    //evaluating whether each of 8 surrounding cells are defined, and
                    //adding one to their surrounding mine count
                    if(gridArr[z][y+1]!==undefined) gridArr[z][y+1][1]+=1;
                    if(gridArr[z+1]!==undefined) gridArr[z+1][y][1]+=1
                    if(gridArr[z+1]!==undefined && gridArr[z][y+1]) gridArr[z+1][y+1][1]+=1
                    if(gridArr[z-1]!==undefined) gridArr[z-1][y][1]+=1
                    if(gridArr[z][y-1]!==undefined) gridArr[z][y-1][1]+=1
                    if(gridArr[z-1]!==undefined && gridArr[z][y-1]!==undefined) gridArr[z-1][y-1][1]+=1
                    if(gridArr[z+1]!==undefined && gridArr[z][y-1]!==undefined) gridArr[z+1][y-1][1]+=1
                    if(gridArr[z-1]!==undefined && gridArr[z][y+1]!==undefined) gridArr[z-1][y+1][1]+=1         
                                       
                    
                }

            }

        }

        
        return gridArr

    }

    //run a recursive function to keep seeking empty blocks.
    //troublshoot why mines are being set to "ckicked" when specified not to


    function emptyCellSeek(arrClone, rId, cId){

        let arrCont=arrClone;

        //checks if surrounding blocks exist
        //checks if mine, then checks if surrounding mine count equal to zero


        if(arrCont[rId][cId+1]!==undefined && arrCont[rId][cId+1][0]!=="Y" && arrCont[rId][cId+1][2] !=="clicked" &&((arrCont[rId][cId+1][1]===0)||(arrCont[rId][cId+1][1]===1))){ 
            arrCont[rId][cId+1][2]="clicked";
            emptyCellSeek(arrCont, rId, cId+1)
        }

        if(arrCont[rId+1]!==undefined && arrCont[rId+1][cId][0]!=="Y" && arrCont[rId+1][cId][2] !=="clicked" &&((arrCont[rId+1][cId][1]===0)||(arrCont[rId+1][cId][1]===1))){ 
            arrCont[rId+1][cId][2]="clicked";
            emptyCellSeek(arrCont, rId+1, cId)

        }

        if(arrCont[rId+1]!==undefined && arrCont[rId][cId+1]!== undefined && arrCont[rId+1][cId+1][0]!=="Y" && arrCont[rId+1][cId+1][2] !=="clicked" &&((arrCont[rId+1][cId+1][1]===0)||(arrCont[rId+1][cId+1][1]===1))) {
            arrCont[rId+1][cId+1][2]="clicked";
        }

        if(arrCont[rId-1]!==undefined && arrCont[rId-1][cId][0]!=="Y" && arrCont[rId-1][cId][2]!=="clicked" &&((arrCont[rId-1][cId][1]===0)||(arrCont[rId-1][cId][1]===1))) {
            arrCont[rId-1][cId][2]="clicked";
            emptyCellSeek(arrCont, rId-1, cId)

        }

        if(arrCont[rId][cId-1]!==undefined && arrCont[rId][cId-1][0]!=="Y" && arrCont[rId][cId-1][2] !=="clicked" &&((arrCont[rId][cId-1][1]===0)||(arrCont[rId][cId-1][1]===1))) {
            arrCont[rId][cId-1][2]="clicked";
            emptyCellSeek(arrCont, rId, cId-1)
        }

        if(arrCont[rId-1]!==undefined && arrCont[rId][cId-1]!==undefined && arrCont[rId-1][cId-1][0]!=="Y" && arrCont[rId-1][cId-1][2] !=="clicked" &&((arrCont[rId-1][cId-1][1]===0)||(arrCont[rId-1][cId-1][1]===1))) {
            arrCont[rId-1][cId-1][2]="clicked";
        }

        if(arrCont[rId+1]!==undefined && arrCont[rId][cId-1]!==undefined && arrCont[rId+1][cId-1][0]!=="Y" && arrCont[rId+1][cId-1][2] !=="clicked" &&((arrCont[rId+1][cId-1][1]===0)||(arrCont[rId+1][cId-1][1]===1))) {
            arrCont[rId+1][cId-1][2]="clicked";
        }


        if(arrCont[rId-1]!==undefined && arrCont[rId][cId+1]!==undefined && arrCont[rId-1][cId+1][0]!=="Y" && arrCont[rId-1][cId+1][2] !=="clicked" &&((arrCont[rId-1][cId+1][1]===0)||(arrCont[rId-1][cId+1][1]===1))) {
            arrCont[rId-1][cId+1][2]="clicked";
        }


        return arrCont


    }


    function cellClickedHandler(rowId, cellidx, clickType){

        let newGrid=[]
        
        for(let n=0;n<9; n++){

            let rowCont=[]

            for(let s=0; s<9; s++){

                if((rowId === n) && (cellidx===s)){

                    if(clickType==="left"){
                        rowCont.push([ grid[n][s][0] , grid[n][s][1],"clicked"])
                    }else if(clickType==="right"){
                        rowCont.push([ grid[n][s][0] , grid[n][s][1],"right-clicked"])
                    }
                    console.log(grid[n][s])

                }else{

                    rowCont.push([ grid[n][s][0] , grid[n][s][1], grid[n][s][2]])

                }

            }

            newGrid.push(rowCont)

        }

        if(newGrid[rowId][cellidx][1]===0 && newGrid[rowId][cellidx][0]!=="Y" && newGrid[rowId][cellidx][2]==="clicked"){
            setGrid(emptyCellSeek(newGrid, rowId, cellidx))
        }else{
            setGrid(newGrid)
        }
        

    }



    window.addEventListener('contextmenu', e=>{
        e.preventDefault();
    })



    return(
        <div className={styles.gameGrid}>

            {grid.map((row, rowId)=>(
                <div key={rowId} className={styles.mRow}>

                    {row.map((cData, cellId)=>{

                        return (
                            <div 
                                onClick={()=>cellClickedHandler(rowId, cellId, "left")} 
                                onContextMenu={()=>cellClickedHandler(rowId, cellId, "right")}
                                key={cellId} 
                                className={
                                    ((cData[2]==="right-clicked")&&(rowId%2===0)&&(cellId%2!==0))||((cData[2]==="right-clicked")&&(rowId%2!==0)&&(cellId%2===0)) ? styles.cellFlaggedAlt : (cData[2]==="right-clicked") ? styles.cellFlaggedAlt : ((cData[2]==="concealed")&&(rowId%2===0)&&(cellId%2!==0))||((cData[2]==="concealed")&&(rowId%2!==0)&&(cellId%2===0)) ? styles.unClickedAlternate : (cData[2]==="concealed") ? styles.unClicked : cData[0]==="Y" ? styles.mCell :  styles.safeCell
                                    }>                                        
                                {(cData[2]==="concealed" || cData[2]==="right-clicked") ? '': (cData[0]==="Y") ? 'NO' : cData[1]!==0 ? cData[1] : '' }
                            </div>
                        )
                    })}

                </div>
            ))}

        </div>
    );

}

export default MineSweeper