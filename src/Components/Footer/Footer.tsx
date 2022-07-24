import React from 'react';
import styles from './Footer.module.css'
import containerStyle from '../../common/styles/Container.module.css';
import {v1} from 'uuid';
import {Icon} from './Icon/Icon';

export type IconType = {
    id: string
    title: string
    icon: string
    link: string
}

export const Footer = () => {

    let icons : Array<IconType> = [
        {id: v1() , title: 'VKontakte', icon:'icon', link: 'link'},
        {id: v1() , title: 'GitHub', icon:'icon', link: 'link'},
        {id: v1() , title: 'LinkedIn', icon:'icon', link: 'link'},
        {id: v1() , title: 'Telegram', icon:'icon', link: 'link'},
        {id: v1() , title: 'CodeWars', icon:'icon', link: 'link'},
    ]
    return (
        <div className={styles.footerBlock}>
            <div className={`${containerStyle.container} ${styles.footerContainer}`}>
                <h2>Mihail Shutov</h2>
                <div className={styles.icons}>
                    {icons.map(el => <Icon key={el.id} id={el.id} title={el.title} icon={el.icon} link={el.link}/>)}
                </div>
            </div>
        </div>
    );
};