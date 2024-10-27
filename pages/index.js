// pages/index.js
import React from 'react';
import UserForm from '../components/UserForm';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <UserForm />
    </div>
  );
}
