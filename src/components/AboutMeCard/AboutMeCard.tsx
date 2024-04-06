import React from 'react'
import styles from './AboutMeCard.module.css'

interface AboutMeCardProps {
  profileIcon: string
  title: string
  description: string
}

const imgUrl = 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg'

function AboutMeCard({ profileIcon, title, description }: AboutMeCardProps) {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  )
}

export default AboutMeCard
