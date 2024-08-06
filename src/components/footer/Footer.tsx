import React from 'react';
import styles from "./footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
   <>
        
      <div className={styles.container} >
 

 <div className={styles.iconsMe}>
 <b>Irakli</b>
 <FontAwesomeIcon icon={faDiscord} size='2x'></FontAwesomeIcon>
 <FontAwesomeIcon icon={faFacebook} size='2x'></FontAwesomeIcon>
 <FontAwesomeIcon icon={faXTwitter} size='2x'></FontAwesomeIcon>

 </div>
 <p>Irakli agency  ©  all rights reserved</p>
    </div></>
 
   )
}

export default Footer