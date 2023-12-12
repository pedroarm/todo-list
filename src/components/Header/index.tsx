import React from 'react';
import appLogo from '../../assets/logo.svg'

import styles from './styles.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={appLogo} alt="App logo" />
    </header>
  );
}

export default Header
