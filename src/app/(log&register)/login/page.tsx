import React from 'react'
import style from "./login.module.css";
import LoginComponent from "@/components/login/login"
const Login = () => {
  return (
    <div className={style.container}>
        <LoginComponent></LoginComponent>
    </div>
  )
}

export default Login