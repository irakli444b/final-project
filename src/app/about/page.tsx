import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.texts}>
        <div className={styles.aboutTop}>About Us</div>
          <div className={styles.bigText}>We are stronger, we are smarter, we are better!!!</div>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit accusantium inventore minima nihil magni molestias, debitis tempora quia
            distinctio alias, asperiores quibusdam error! Earum ipsa facilis enim nam voluptates?
          </div>
          <div className={styles.posSides}>
            <div className={styles.posItem}><p>10K</p>years of experience<p></p></div>
            <div className={styles.posItem}><p>20K</p>years oh happy customers<p></p></div>
            <div className={styles.posItem}><p>0K</p><p>dollars made ;(</p></div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={"/mewingEmoji.png"} alt="harryMogger" width={100} height={100} className={styles.mainImage}></Image>
        </div>
      </div>
    </>
  );
};

export default About;
