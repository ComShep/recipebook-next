import { Tag } from "@/components/ui/tag/Tag";
import styles from "./AboutUs.module.css";
import Link from "next/link";
import { Button } from "@/components/ui/button/Button";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.firstElement}>
        <div className={styles.info}>
          <Tag title="about us" />
          <h2 className={styles.title}>Our Culinary Chronicle</h2>
          <p className={styles.text}>
            Our journey is crafted with dedication, creativity, and an
            unrelenting commitment to delivering delightful culinary
            experiences. Join us in savoring the essence of every dish and the
            stories that unfold.
          </p>
          <Link href="/about">
            <Button name="read more" />
          </Link>
        </div>
        <Image src={"/img/about/1.png"} alt="about" width={632} height={652} />
      </div>
      <div className={styles.secondElement}>
        <Image src={"/img/about/2.png"} alt="about" width={1722} height={662}/>
      </div>
      <div className={styles.thirdElement}>
        <Image src={'/img/about/3.png'} alt='about' width={822} height={1330}/>
      </div>
    </section>
  );
}
