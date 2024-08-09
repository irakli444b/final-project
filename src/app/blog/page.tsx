"use client"; // Ensure this is a client component
import React from 'react';
import Postcard from '@/components/postcard/postcard';
import styles from "./blog.module.css";
import useFetch from "@/components/data/data";

interface DataArrayProps {
  id: string;
  title: string;
  body: string;
}

const Blog = () => {
  const { readyData } = useFetch();

  return (
    <div className={styles.container}>
      {readyData.map((item: DataArrayProps) => (
        <Postcard
          name={item.title}
          desc={item.body}
          key={item.id}
          pageKey={item.id}
        />
      ))}
    </div>
  );
};

export default Blog;
