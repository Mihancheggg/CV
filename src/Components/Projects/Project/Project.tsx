import React from 'react';
import styles from './Project.module.css'
import {ProjectType} from '../Projects';

export const Project = (props: ProjectType) => {
    return (
        <div className={styles.project}>
            <div className={styles.image}></div>
            <div className={styles.textBlock}>
                <h3>{props.title}</h3>
                <span>{props.description}</span>
            </div>
            <button>View project</button>
        </div>
    );
};