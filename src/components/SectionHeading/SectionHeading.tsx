import React from 'react'
import styles from './SectionHeading.module.css'

interface ProjectProps {
  index: string
  title: string
  subtitle: string
}

export default function SectionHeading({
  index,
  title,
  subtitle
}: ProjectProps) {
  return (
    <div className={styles.root}>
      <div className={styles.project_title_container}>
        <span className={styles.section_index}>{index}</span>
        <h1>{title}</h1>
      </div>
      <h2 className={styles.subtitle}>{subtitle}</h2>
    </div>
  )
}
