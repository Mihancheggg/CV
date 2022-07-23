import React from 'react';
import styles from './Main.module.css'
import containerStyle from './../../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={containerStyle.container}>
                <div className={styles.greeting}>
                    <span>Hi There</span>
                    <h1>I am Mihail Shutov</h1>
                    <p>A Front-end developer.</p>
                </div>
                <div className={styles.photo}>
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    );
};

