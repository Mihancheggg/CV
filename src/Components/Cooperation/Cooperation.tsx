import React from 'react';
import styles from './Cooperation.module.css'
import containerStyle from '../../common/styles/Container.module.css';

export const Cooperation = () => {
    return (
        <div className={styles.cooperationBlock}>
            <div className={`${containerStyle.container} ${styles.cooperationContainer}`}>
                <h3>Considering options for remote work</h3>
                <button>Contact me</button>
            </div>
        </div>

    );
};

