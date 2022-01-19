import React from 'react'
import { useContext } from "react";
import { ThemeContext } from '../Context/ThemeContext';
import styles from "./Todo.module.css"

const dark = { backgroundColor: "#94DAFF", color: "green" };
const light = { backgroundColor: "green", color: "#94DAFF" };

function Todo() {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleThemeChange = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <div style={theme === "light" ? light : dark} className={styles.body}>
          <div className={styles.box}>
              <h1>  My Dashboard </h1>
                {/* <button className={styles.btn} onClick={handleThemeChange}>DarkMode</button> */}
                <label className={styles.switch}>
                 <input type="checkbox" />
                  <span className={`${styles.slider} ${styles.round}`} onClick={handleThemeChange}></span>
             </label>
            </div>

            <div className={styles.block}>
                <div  className={styles.line}>
                    <h1>Active Users</h1>
                    <h3>for December 2021</h3>
                </div>

                <div className={styles.line}>
                    <h3>Kapila</h3>
                    <h3>...</h3>
                 </div>
                <div className={styles.line}>
                    <div>Professional level: 11</div>
                    <div>5324 points</div>
                </div>

                <div className={styles.line}>
                    <h3>Nrupul</h3>
                    <h3>...</h3>
                 </div>
                <div className={styles.line}>
                    <div>Professional level: 11</div>
                    <div>2339 points</div>
                </div>

                <div className={styles.line}>
                    <h3>Venu</h3>
                    <h3>...</h3>
                 </div>
                <div className={styles.line}>
                    <div>Professional level: 6</div>
                    <div>1884 points</div>
                </div>
            </div>
           
        </div>
    )
}

export default Todo
