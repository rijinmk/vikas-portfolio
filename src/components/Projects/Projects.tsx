import React from 'react'
import styles from './Projects.module.css'

interface ProjectProps {
  index : string
  title : string
  subtitle : string
}

export default function Projects({
  index,
  title,
  subtitle
}: ProjectProps) {
  return (
    <div className={styles.root}>
      <div className={styles.main_project_title_container}>
        <div className={styles.project_title_container}>
          <span className={styles.section_index}>{index}</span>
          <h1>{title.toUpperCase()}</h1>
        </div>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </div>
    </div>
  )
}
