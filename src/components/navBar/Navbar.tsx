"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { title } from "process";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
      {navItems.map((item)=><Link href={item.path} key={item.title} className={`${styles.navItem} ${item.path === path && styles.activeLink}`}>{item.title}</Link>)}
    </div>

    {isMenu === false && <FontAwesomeIcon icon={faBars} className={styles.burger} size="2x" onClick={()=>setMenu(true)}></FontAwesomeIcon>}
    {isMenu &&
     <div className={styles.verticalMenu}>
      {navItems.map((item)=><Link href={item.path} key={item.title} className={`${styles.navItem} ${item.path === path && styles.activeLink}`}>{item.title}</Link>)}
      <button onClick={()=>setMenu(false)} className={styles.closeButton}>Close</button>
      </div> }
    </div>
  
    
  )
}

export default Navbar