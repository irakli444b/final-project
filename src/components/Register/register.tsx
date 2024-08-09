import React from 'react'
import styles from "./register.module.css"
import Link from "next/link"
const RegisterComp = () => {
  return (
    <div className={styles.container}>
    <div className={styles.itemsContainer}>
      <form className={styles.formContainer}>
          <input type="text" placeholder='First Name' required/>
          <input type="text" placeholder='Last Name' required/>
          <input type="text" placeholder='Age' required/>
          <input type="text" placeholder='Email' required/>
          <input type="text" placeholder='Password' required/>
          <input type="text" placeholder='Reapeat Password' required/>
          <button>Register</button>
      </form>
      <p>Already have an accaunt <Link href={"./login"} className={styles.loginButton}>Login</Link></p>
      </div>
  </div>
  )
}

export default RegisterComp