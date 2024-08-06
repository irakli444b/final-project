"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";


const navItems = [
  { title: "Homepage", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
  { title: "Login", path: "/login" },
];


const Navbar = () => {
  const [isMenu,setMenu] = useState(false);
  const path = usePathname();
  return (
    <div className={styles.navdiv} >
          <Link href={"/"} className={styles.logo}>Main</Link>
    <div className={styles.big}>
      {navItems.map((item)=><Link href={item.path} className={`${styles.navItem} ${item.path === path && styles.activeLink}`}>{item.title}</Link>)}
    </div>

    <div className={styles.small}>idhwhdakd</div>
    </div>
  
    
  )
}

export default Navbar