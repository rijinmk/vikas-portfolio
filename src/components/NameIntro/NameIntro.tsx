import React from 'react'
import styles from './NameIntro.module.css'

interface NameIntroProps {
  names: string
  subtitle?: string
  textColor?: string
  largeFontSize?: number
}

function NameIntro({
  names,
  subtitle,
  textColor,
  largeFontSize
}: NameIntroProps) {
  return (
    <div
      className={styles.root}
      style={{
        color: textColor || 'black',
        fontSize: largeFontSize || '65px'
      }}
    >
      <div>
        I<span className={styles.primary}>'</span>M
      </div>
      <div>
        {names}
        <span className={styles.primary}>.</span>
      </div>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

export default NameIntro
