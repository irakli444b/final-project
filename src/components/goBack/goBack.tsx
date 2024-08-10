"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import styles from "./goBack.module.css"

const Goback = () => {
    const router = useRouter();

    const goBack = () => {
      router.back(); 
    };
  
    return (
      <div>
        <button onClick={goBack} className={styles.goBackButton}>Go Back</button>
      </div>
    );
  };
  

export default Goback