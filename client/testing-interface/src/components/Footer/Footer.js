import React from 'react';
import styles from './Footer.module.css';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.ending}>
        <Heading text='Achieve more, faster. Join the Hyperlane.' />
      </div>
      <Heading text='Get in touch' />
      <div className={styles.textSeparator}>
        <Text text='team@hyperlane.finance' />
      </div>
    </div>
  );
}
