import React from 'react'
import styles from './Section.module.css'

interface SectionProps {
  backgroundImageURL?: string
  enableAnimation?: boolean
  children: React.ReactNode
  paddingTop?: string
  paddingBottom?: string
}

function Section({
  backgroundImageURL,
  children,
  enableAnimation,
  paddingTop = '0px',
  paddingBottom = '0px'
}: SectionProps) {
  return (
    <div
      className={styles.root}
      style={{
        paddingTop,
        paddingBottom,
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
