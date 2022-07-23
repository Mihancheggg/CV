import React from 'react';
import styles from './Skill.module.css'
import {SkillType} from '../Skills';

export const Skill = (props: SkillType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}></div>
            <h3>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
};
