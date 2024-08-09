import Image from "next/image";
import styles from "./page.module.css"
export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.texts}>
        <div className={styles.bigText}>Random <br /> Big <br /> Text</div>
        
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit accusantium inventore minima nihil magni molestias, debitis tempora quia
          distinctio alias, asperiores quibusdam error! Earum ipsa facilis enim nam voluptates?
        </div>
        <button className={styles.learnMore}>Learn more</button>
      </div>
      <div className={styles.imageContainer}><Image src={"/nature.jpg"} alt="harryMogger" width={100} height={100} className={styles.mainImage}></Image></div>
      </div>
    </>
  );
}

