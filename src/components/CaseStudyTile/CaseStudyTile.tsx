import React from 'react'
import styles from './CaseStudy.module.css'

interface CaseStudyTileProps{
  projects : {
    title?: string
    subtitle: string
    projectType : string
    imageUrl?: string
    direction: string
  }[]
}

export default function CaseStudyTile({ projects }: CaseStudyTileProps) {
  return (
    <div className={styles.root}>
      {projects.map((eachProject) => (
        <div key={eachProject.title} className={styles.caseStudyContainer}>
          <img style={{ order: eachProject.direction === 'left' ? 0 : 1 }} src={eachProject.imageUrl || '../../assets/images/jpg/defaultProjectImage.jpg'} alt={`${eachProject.title}`} />
          <div className={styles.caseStudyInfo}>
            {eachProject.title && <h3>{eachProject.title}</h3>}
            <p className={styles.subtitle}>{eachProject.subtitle}</p>
            <p className={styles.project_type}>{eachProject.projectType}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
