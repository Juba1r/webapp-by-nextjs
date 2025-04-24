import Image from "next/image";
import styles from "./page.module.css";
// import hero_img from

export default function Home() {
  return (
    <div>
      <Image src={hero_img} />
    </div>
  );
}
