import React from 'react'
import styles from './AboutMeCard.module.css'

interface AboutMeCardProps {
  profileIcon: string
  title: string
  description: string
}

function AboutMeCard({ profileIcon, title, description }: AboutMeCardProps) {
  return (
    <div className={styles.root}>
      <div className={styles.profileIcon} style={{ backgroundImage: `url('${profileIcon}')` }} />
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  )
}

export default AboutMeCard
