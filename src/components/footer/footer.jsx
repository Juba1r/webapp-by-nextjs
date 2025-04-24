import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";


const Footer = () => {
  return (
    <div className={styles.container}>
      <div> 2025 WebApp. All Rights Reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" className={styles.icon} width={15} height={15} alt="web app" />
        <Image src="/2.png" className={styles.icon} width={15} height={15} alt="web app" />
        <Image src="/3.png" className={styles.icon} width={15} height={15} alt="web app" />
        <Image src="/4.png" className={styles.icon} width={15} height={15} alt="web app" />
      </div>
    </div>
  );
};

export default Footer;
