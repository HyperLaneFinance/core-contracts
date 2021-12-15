import React from 'react';
import styles from './Button.module.css';

export default function Button({ title, anchor }) {
  return (
    <button className={styles.button} tabindex='0' type='button'>
      <a href={anchor} className={styles.MuiButton}>
        {title}
      </a>
      <span className={styles.MuiTouchRipple}></span>
    </button>
  );
}
