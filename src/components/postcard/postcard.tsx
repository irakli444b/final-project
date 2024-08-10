"use client"
import React from "react";
import Image from "next/image";
import styles from "./postcard.module.css";
import { useState } from "react";
import Link from "next/link"



interface Props {
  name: string;
  desc: string;
  pageKey:string;
}

const Postcard = ({ name, desc,pageKey }: Props) => {
  const [isVisible,setVisibility] = useState(false)
  return (
    <div className={styles.container}>
      <Image src={"/nature.jpg"} alt="img" width={100} height={100} className={styles.Image} />
      <h2>{name}</h2>
      <h5>{desc}</h5>
      <Link href={`/blog/${pageKey}`} >Read More</Link>

    </div>
  );
};

export default Postcard;
