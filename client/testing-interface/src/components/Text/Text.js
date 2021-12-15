import React from 'react';
import styles from './Text.module.css';

export default function Text({ text, small = false }) {
  return (
    <div className={`${styles.text} ${small && styles.small}`}>{text}</div>
  );
}
