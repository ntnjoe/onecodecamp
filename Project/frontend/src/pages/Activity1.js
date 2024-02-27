import React from 'react'
import styles from '../styles/activity1.module.css'
import PostComponent from '../components/PostComponent'
export default function Activity1() {
  const posts = [{
    name: "Joe Natan",
    date: "February 26, 2024",
    img:"https://images.pexels.com/photos/36744/agriculture-arable-clouds-countryside.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "Softly the evening came with the sunset"
  }, {
    name: "John Doe",
    date: "February 26, 2024",
    img:"https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "It's not the destination, it's the journey."
  }, {
    name: "Joe Natan",
    date: "February 26, 2024",
    img:"https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "Our peace shall stand as firm as rocky mountains."
  }]
  return (
    <div className={styles.mainContainer}>
      {posts.map((post)=>
        <PostComponent post={post}/>
      )}
    </div>
  )
}
