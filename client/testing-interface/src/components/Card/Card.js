import React from 'react';
import styles from './Card.module.css';

export default function Card({ title, description, linktext = '', rest = '' }) {
  console.log(`linktext`, linktext);
  return (
    <div className={styles.multigridRoot}>
      <div className={styles.jss357}>
        <div className={styles.jss362}>{title}</div>
        <div className={styles.jss363}>
          <span>{`${description}`}</span>
          <a href='#roadmap'>{linktext}</a>
          <span>{` ${rest}`}</span>
        </div>
        <div className={styles.jss367}>
          <a className={styles.a}>
            {/* <button className={styles.MuiButtonBase} tabindex='0' type='button'>
              <span class='MuiButton-label'> 1 </span>
              <span class='MuiTouchRipple-root'></span>
            </button> */}
          </a>
        </div>
      </div>
    </div>
  );
}
