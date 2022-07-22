import React from 'react';
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    );
};