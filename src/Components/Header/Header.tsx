import React from 'react';
import styles from './Header.module.css'
import {Navbar} from './Navbar/Navbar';

export const Header = () => {
    return (
        <div className={styles.header}>
            <Navbar/>
        </div>
    );
};