"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

const Goback = () => {
    const router = useRouter();

    const goBack = () => {
      router.back(); // Go back to the previous page
    };
  
    return (
      <div>
        <button onClick={goBack}>Go Back</button>
      </div>
    );
  };
  

export default Goback