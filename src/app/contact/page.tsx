import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";
const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={"/harryMogger.jpg"} alt={"sigma"} width={100} height={100} className={styles.mainImage}></Image>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <input type="text" placeholder="Name and Surname" className={styles.input}/>
            <input type="text" placeholder="Email Addres"  className={styles.input} />
            <input type="text" placeholder="Phone number(optional)"  className={styles.input}/>
            <textarea name="" id="" placeholder="message"  className={styles.textarea}></textarea>
            <button className={styles.sendButton}>Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
