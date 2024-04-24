import React from 'react'
import DOMPurify from 'dompurify'
import styles from './ExperienceTimeline.module.css'

interface ExperienceNode {
  dateRange: string
  title: string
  type: string
  richText: string
}

interface ExperienceTimelineProps {
  experiences: ExperienceNode[]
  color?: string
}

function ExperienceTimeline({ experiences, color = '#000' }: ExperienceTimelineProps) {
  return (
    <div className={styles.root} style={{ color }}>
      <div className={styles.experienceLine} />
      {experiences.map((exp) => (
        <div className={styles.experienceContainer}>
          <div className={styles.experienceDot} />
          <p className={styles.dateRange}>{exp.dateRange}</p>
          <h2>{exp.title}</h2>
          <p className={styles.experienceType}>{exp.type}</p>
          <div
            className={styles.experienceRichText}
            // eslint-disable-line react/no-danger
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(exp.richText) }}
          />
        </div>
      ))}
    </div>
  )
}

export default ExperienceTimeline
