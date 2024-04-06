import React from 'react'
import styles from './SectionHeading.module.css'

interface ProjectProps {
  index: string
  title: string
  subtitle?: string
  color?: string
}

export default function SectionHeading({
  index,
  title,
  subtitle,
  color
}: ProjectProps) {
  const indexColor = `${color}AF`

  return (
    <div
      className={styles.root}
      style={{
        color: 'black'
      }}
    >
      <div className={styles.project_title_container}>
        <span className={`${styles.section_index}`} style={{ color: indexColor }}>
          {index}
        </span>
        <h1>{title}</h1>
      </div>
      <h2 className={styles.subtitle}>{subtitle}</h2>
    </div>
  )
}