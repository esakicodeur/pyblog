import React from 'react'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Menu from '@/components/Menu/Menu'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src="/p1.jpeg" alt='' fill className={styles.avatar} />
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>21.03.2024</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt='' fill className={styles.image} />
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab cum recusandae aspernatur, commodi fuga quos necessitatibus voluptatibus neque possimus ea ipsam sint earum dolorum dolor laboriosam perspiciatis aperiam minus laborum! Ab cum recusandae aspernatur, commodi fuga quos necessitatibus voluptatibus neque possimus ea ipsam sint earum dolorum dolor laboriosam perspiciatis.
                    </p>
                    <h2>Lorem ipsum dolor sit amet consectetur</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab cum recusandae aspernatur, commodi fuga quos necessitatibus voluptatibus neque possimus ea ipsam sint earum dolorum dolor laboriosam perspiciatis aperiam minus laborum! Ab cum recusandae aspernatur, commodi fuga quos necessitatibus voluptatibus neque possimus ea ipsam sint earum dolorum dolor laboriosam perspiciatis.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab cum recusandae aspernatur, commodi fuga quos necessitatibus voluptatibus neque possimus ea ipsam sint earum dolorum dolor laboriosam perspiciatis aperiam minus laborum! Ab cum recusandae aspernatur, commodi fuga quos necessitatibus voluptatibus neque possimus ea ipsam sint earum dolorum dolor laboriosam perspiciatis.
                    </p>
                </div> 
                <div className={styles.comment}>
                    <Comments/>
                </div>
            </div>   
            <Menu/>
        </div>
    </div>
  )
}

export default SinglePage