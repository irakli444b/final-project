import React from 'react'
import styles from "./loginComp.module.css"
import Link from "next/link"
import { register } from 'module'
const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
      <button className={styles.github}>Log in with github</button>
        <form className={styles.formContainer}>
            <input type="text" placeholder='User Name' required/>
            <input type="text" placeholder='Password' required/>
            <button>Submit</button>
        </form>
        <p>Don't have an accaunt <Link href={"./register"} className={styles.registerButton}>Register</Link> </p>
        </div>
    </div>
  )
}

export default Login