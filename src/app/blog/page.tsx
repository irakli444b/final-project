"use server"
import React from 'react'
import Postcard from '@/components/postcard/postcard'
import styles from "./blog.module.css"
async function fetchingData() {
    const dataArray =  await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: { revalidate: 3600 },
      });
      if (!dataArray.ok) {
        throw new Error("Something went wrong!");
      }
      return dataArray.json();
}
interface dataArrayProps{
    id:string;
    title:string;
    body:string;
}
const Blog = async () => {
    const readyData = await fetchingData();
  return (
    <div className={styles.container}>
         {readyData.map((item:dataArrayProps)=>
            (<Postcard name={item.title} desc={item.body} key={item.id} pageKey={item.id}/>)
            )}
    </div>
    
   
  )
}

export default Blog