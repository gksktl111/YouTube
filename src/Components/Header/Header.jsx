import React, { useState } from 'react';
import styles from './Header.module.css';
import { SlMagnifier } from 'react-icons/sl';
import { BsSun } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/video?search=${searchTerm}`);
  };

  return (
    <header className={styles.container}>
      <Link to='/'>
        <img className={styles.logo} src='./youTube_logo.png' alt='logo' />
      </Link>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type='text'
          placeholder='검색'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

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
