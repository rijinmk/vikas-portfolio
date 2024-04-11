import React from 'react'
import styles from './NameIntro.module.css'

interface NameIntroProps {
  name: string
  subtitle?: string
  textColor?: string
  largeFontSize?: number
}

function NameIntro({ name, subtitle, textColor, largeFontSize }: NameIntroProps) {
  const names = name.split(' ').map((e) => e)
  return (
    <div
      className={styles.root}
      style={{
        color: textColor || 'black',
        fontSize: largeFontSize || 'clamp(0.4rem, 5vw, 2.5rem)'
      }}
    >
      <div>
        I<span className={styles.primary}>'</span>M
      </div>
      {names.map((e) => (
        <div>{e}</div>
      ))}
      <span className={styles.primary}>.</span>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}

export default NameIntro
