import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

interface HeaderProps {
  logo: string
  navItems: string[]
  onNavItemClick: (item: string) => void
  activeItem: string
  bgColor?: string
  textColor?: string
}

function Header({
  logo,
  navItems,
  onNavItemClick,
  activeItem,
  bgColor,
  textColor
}: HeaderProps) {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const openHamburger = () => {
    setIsNavOpen(!isNavOpen)
  }

  useEffect(() => {
    if (document.body.style.overflow === 'hidden') {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }, [isNavOpen])

  return (
    <div className={styles.root} style={{ backgroundColor: bgColor, color: textColor }}>
      <div className={styles.headerContainer}>
        <div className={styles.logo_container}>
          <img className='logo' src={logo} alt='logo' />
        </div>
        <nav className={`${styles.nav} ${isNavOpen ? styles.nav_open : ''}`}>
          <ul>
            {navItems.map((eachItem: string) => (
              <li>
                <NavLink
                  key={eachItem}
                  to={`/${eachItem.toLowerCase()}`}
                  onClick={() => onNavItemClick(eachItem)}
                  className={`${styles.navlink} ${eachItem.toUpperCase() === activeItem ? styles.active : ''}`}
                >
                  {eachItem}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.hamburger_container}>
        <button
          type='button'
          id={styles.hamburger}
          className={`${styles.hamburger} ${isNavOpen ? styles.open : ''}`}
          onClick={openHamburger}
        >
          <svg width='50' height='50' viewBox='0 0 100 100'>
            <path className={`${styles.line} ${styles.line1}`} d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058' />
            <path className={`${styles.line} ${styles.line2}`} d='M 20,50 H 80' />
            <path className={`${styles.line} ${styles.line3}`} d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942' />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Header
