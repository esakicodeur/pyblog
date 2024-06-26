import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Card() {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>21.03.2024 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/">
                <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </Link>
            <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iste delectus blanditiis totam, accusamus aliquid modi cumque minus doloremque, quae tempore laudantium maxime, eum consequatur vel! In, ipsa quia! Quas?
            </p>
            <Link href="/" className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default Card