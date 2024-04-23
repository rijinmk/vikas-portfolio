import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Footer.module.css'

interface FooterProps {
  logo?: string
  copyrightNotice?: string
}

function Footer({ logo, copyrightNotice }: FooterProps) {
  const navigate = useNavigate()

  function navigateHome() {
    navigate('/')
    window.scrollTo(0, 0)
  }

  return (
    <div className={styles.root}>
      <button type='button' onClick={navigateHome} className={styles.logo_container}>
        <img className='logo' src={logo} alt='logo' />
      </button>
      <p className={styles.copyrightNotice}>{copyrightNotice}</p>
    </div>
  )
}

export default Footer
