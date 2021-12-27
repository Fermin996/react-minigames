import React, {useState} from "react";
import styles from "./BoardRow.module.css";
import Cell from './Cell/Cell'

const BoardRow=(props)=>{

    

    return(
    <div className={styles.rowOne}>
        <Cell  moveCount={props.moveNum} callB={props.callBack} move={''} rowNum={props.rowNum} cellNum={1}></Cell>
        <Cell  moveCount={props.moveNum} callB={props.callBack} move={''} rowNum={props.rowNum} cellNum={2}></Cell>
        <Cell  moveCount={props.moveNum} callB={props.callBack} move={''} rowNum={props.rowNum} cellNum={3}></Cell>
    </div>
    )

}

export default BoardRow;