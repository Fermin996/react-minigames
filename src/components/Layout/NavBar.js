import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';   

const NavBar=(props)=>{

    return(
        <div className={styles.navBox}>
            <h3 className={styles.webHeading}>Swim Or Float</h3>
            <ul className={styles.gamesUl}>
                <li >
                    <NavLink to='/tic-tac-toe' className={styles.gamesClick}>
                        Tic Tac Toe
                    </NavLink>
                </li>
                <li className={styles.gamesClick}>
                    <NavLink to='/Snake' className={styles.gamesClick}>
                        Snake
                    </NavLink>    
                </li>
                <li className={styles.gamesClick}>
                    <NavLink to='/mine-sweeper' className={styles.gamesClick}>
                        MineSweeper
                    </NavLink>
                </li>
                <li className={styles.gamesClick}>Chess</li>
                <li className={styles.gamesClick}>Checkers</li>
            </ul>
        </div>
    );

};

export default NavBar;