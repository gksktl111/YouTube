import React from 'react';
import styles from './Header.module.css';
import { SlMagnifier } from 'react-icons/sl';
import { BsSun } from 'react-icons/bs';

export default function Header() {
  return (
    <header className={styles.container}>
      <img className={styles.logo} src='./youTube_logo.png' alt='logo' />
      <form className={styles.form}>
        <input className={styles.input} type='text' placeholder='검색' />
        <button className={styles.button}>
          <SlMagnifier />
        </button>
      </form>
      <button className={styles.toggle}>
        <BsSun />
      </button>
    </header>
  );
}
