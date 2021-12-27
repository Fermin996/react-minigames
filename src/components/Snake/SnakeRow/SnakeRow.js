import React from 'react';
import styles from './SnakeRow.module.css';
import Square from '../Square/Square';

const SnakeRow=(props)=>{

    let currentRow=props.thisRow;

    let sqrCont=[] 
    
    {currentRow.forEach((sqr)=>{
        sqrCont.push(<Square headNode={props.headCoord} thisCell={sqr} key={sqr[0]} fudNode={props.foodCoord} />)
     })}

    return(
        <div className={styles.rows}>
            {sqrCont}
        </div>
    )

}

export default SnakeRow;