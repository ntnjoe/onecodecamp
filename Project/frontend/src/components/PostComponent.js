import React from 'react'
import styles from '../styles/activity1.module.css'
function PostComponent({post}) {
  return (
    <div className={styles.postContainer}>
        <span className={styles.userName}>{post.name}</span>
        <p className={styles.postContent}>{post.content}</p>
        <img src={post.img} alt="" className={styles.image}/>
    </div>
  )
}

export default PostComponent