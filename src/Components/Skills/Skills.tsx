import React from 'react';
import styles from './Skills.module.css'
import containerStyle from './../../common/styles/Container.module.css'
import {Skill} from './Skill/Skill';
import {v1} from 'uuid';

export type SkillType = {
    id: string
    title: string
    description: string
    icon: string
}

export const Skills = () => {

    let skills: Array<SkillType> = [
        {id: v1(), title: 'HTML', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor', icon: 'link'},
        {id: v1(), title: 'CSS', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor ', icon: 'link'},
        {id: v1(), title: 'JS', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor', icon: 'link'},
        {id: v1(), title: 'React', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor', icon: 'link'}
    ]

    return (
        <div className={styles.skillsBlock}>
            <div className={`${containerStyle.container} ${styles.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={styles.skills}>
                    {skills.map(el => <Skill key={el.id} id={el.id} title={el.title} description={el.description} icon={el.icon}/>)}
                </div>
            </div>
        </div>
    );
};
