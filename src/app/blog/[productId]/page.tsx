"use server";
import React from "react";
import Image from "next/image";
import styles from "./dynamic.module.css";
import Link from "next/link";
import Goback from "@/components/goBack/goBack";

const getSinglePost = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error("Can't fetch Single blog");
  }
  return res.json();
};
const dynamicSingleBlogPage = async ({ params }: { params: { productId: string } }) => {
  const id = params.productId;
  const singleData = await getSinglePost(id);
  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
        <Image src={singleData.image ?? "/nature.jpg"} alt="img" width={100} height={100} className={styles.image}></Image>
        <div className={styles.textsContainer}>
          <h1>{singleData.title}</h1>
          <h3>{singleData.body}</h3>
          dynamicSingleBlogPage {id}
          <Goback></Goback>
        </div>
      </div>
    </div>
  );
};

export default dynamicSingleBlogPage;
