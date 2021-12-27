import React from 'react';
import styles from './Square.module.css';

const Square=(props)=>{

    let isHead= (props.headNode[0]===props.thisCell[0])&&(props.headNode[1]===props.thisCell[1])
    let isFood= (props.fudNode[0]===props.thisCell[0])&&(props.thisCell[1]===props.fudNode[1]);
    //let isFood=false;


    return(

        <div className={isHead ? styles.checking: isFood ? styles.foodNode : styles.indiCell}>
            {props.thisCell}
        </div>

    )

}   

export default Square;