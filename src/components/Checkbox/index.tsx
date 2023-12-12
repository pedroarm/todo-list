import React from 'react';
import check from '../../assets/check.svg'

import styles from './styles.module.css';

interface CheckboxProps {
  checked: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
}) => {
  return (
    <div className={`${styles.checkbox} ${checked ? styles.checked : ''}`}>
      {checked && (
        <img src={check} />
      )}
    </div>
  );
}

export default Checkbox;