import React from 'react';
import styles from './Projects.module.css';
import {v1} from 'uuid';
import containerStyle from '../../common/styles/Container.module.css';
import {Project} from './Project/Project';

export type ProjectType = {
    id: string
    title: string
    description: string
    image: string
    link: string
}

export const Projects = () => {

    let projects: Array<ProjectType> = [
        {
            id: v1(),
            title: 'TodoList',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor',
            image: 'link',
            link: 'link'
        },
        {
            id: v1(),
            title: 'Social Network',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor',
            image: 'link',
            link: 'link'
        },
        {
            id: v1(),
            title: 'Online Cinema',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor',
            image: 'link',
            link: 'link'
        }
    ]

    return (
        <div className={styles.projectsBlock}>
            <div className={`${containerStyle.container} ${styles.projectsContainer}`}>
                <h2>Projects</h2>
                <div className={styles.projects}>
                    {projects.map(el => <Project
                        key={el.id}
                        id={el.id}
                        title={el.title}
                        description={el.description}
                        image={el.image}
                        link={el.link}/>)}
                </div>
            </div>
        </div>
    );
};

