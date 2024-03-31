import React from 'react'
import styles from './Section.module.css'

interface SectionProps {
  backgroundImageURL?: string
  enableAnimation?: boolean
  children: React.ReactNode
}

function Section({
  backgroundImageURL,
  enableAnimation,
  children
}: SectionProps) {
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
  backgroundImageURL: '',
  enableAnimation: false
}

export default Section
