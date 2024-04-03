import React from 'react'
import styles from './Section.module.css'

interface SectionProps {
  backgroundImageURL?: string
  enableAnimation?: boolean
  children: React.ReactNode
}

function Section({
  backgroundImageURL,
  children,
  enableAnimation
}: SectionProps) {
  return (
    <div
      className={styles.root}
      style={{
        backgroundImage: `url(${backgroundImageURL})`,
        backgroundAttachment: enableAnimation ? 'fixed' : 'none'
      }}
    >
      {children}
    </div>
  )
}

Section.defaultProps = {
  backgroundImageURL: '',
  enableAnimation: true
}

export default Section
