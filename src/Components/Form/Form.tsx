import React from 'react';
import styles from './Form.module.css'
import containerStyle from '../../common/styles/Container.module.css';

export const Form = () => {
    return (
        <div className={styles.formBlock}>
            <div className={`${containerStyle.container} ${styles.formContainer}`}>
                <h3>Leave your contacts</h3>
                <form action="submit" className={styles.form}>
                    <input type="text" placeholder={'Your name'}/>
                    <input type="text" placeholder={'Your phone'}/>
                    <textarea name="additional" id="" placeholder={'Additional information'}>
                    </textarea>
                </form>
                <button>Submit</button>
            </div>
        </div>

    );
};

