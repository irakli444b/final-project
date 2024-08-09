"use client"; 
import { useEffect, useState } from "react";

export default function useFetch() {
  const [readyData, setReadyData] = useState<any[]>([]);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        setReadyData(data);
      } catch (error) {
        console.error((error as Error).message);
      }
    };

    fetchingData(); 

    const intervalId = setInterval(() => {
      fetchingData(); 
    }, 3600000);

    return () => clearInterval(intervalId); 
  }, []);

  return { readyData };
}
