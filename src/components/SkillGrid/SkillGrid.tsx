import React from 'react'
import styles from './SkillGrid.module.css'

interface SkillGridProps {
  skills: { name: string; image: string }[]
  spacing: number
}

function SkillGrid({ skills, spacing }: SkillGridProps) {
  return (
    <div className={styles.root} style={{ gap: spacing || '20px' }}>
      {skills.map((skill) => (
        <div className={styles.cell}>
          <div
            style={{
              backgroundImage: `url(${skill.image})`
            }}
            className={styles.cellImage}
          />
          <div className={styles.cellText}>{skill.name}</div>
        </div>
      ))}
    </div>
  )
}

export default SkillGrid
