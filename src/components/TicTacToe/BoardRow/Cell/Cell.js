import React, {useState, useEffect} from "react";
import styles from "./Cell.module.css"

const Cell=(props)=>{
    
    const [move, setMove] = useState(props.move);   

    let currentCellNum= (props.rowNum*3)+props.cellNum;

    // useEffect(()=>{
    //     console.log('oinoinoin')
    // },[])

    let ticToeHandler=()=>{


        if(props.moveCount%2===0){
            setMove('X')
            props.callB(currentCellNum, 'X')
        }else{
            setMove('O')
            props.callB(currentCellNum, 'O')
        }
        

     }    
    
return(
    <section onClick={ticToeHandler} className={styles.nodess}><h2>{move}</h2></section>
)

}

export default Cell;