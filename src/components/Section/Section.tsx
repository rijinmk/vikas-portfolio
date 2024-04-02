import React from 'react'
import styles from './Section.module.css'

interface SectionProps {
  backgroundImageURL?: string
  children: React.ReactNode
}

function Section({ backgroundImageURL, children }: SectionProps) {
  console.log(backgroundImageURL)

  return (
    <div
      className={styles.root}
      style={{
        backgroundImage: `url(${backgroundImageURL})`
      }}
    >
      {children}
    </div>
  )
}

Section.defaultProps = {
  backgroundImageURL: ''
}

export default Section
