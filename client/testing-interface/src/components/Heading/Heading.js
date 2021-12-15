import React from 'react';
import styles from './Heading.module.css';

export default function Heading({
  text,
  green = false,
  hidden = false,
  hiddenLarge = false,
}) {
  return (
    <div
      className={`${styles.Heading} ${green && styles.green} ${
        hidden && styles.hidden
      } ${hiddenLarge && styles.hiddenLarge}`}
    >
      {text}
    </div>
  );
}
