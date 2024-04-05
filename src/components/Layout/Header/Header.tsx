import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import HamburgerIcon from '../../../assets/Hamburger/HamburgerIcon'

interface HeaderProps {
  logo: string
  navItems: string[]
  // eslint-disable-next-line no-unused-vars
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
      <div className={styles.header_container}>
        <div className={styles.logo_container}>
          <img className='logo' src={logo} alt='logo' />
        </div>
        <nav className={`${styles.nav_container} ${isNavOpen ? styles.nav_open : ''}`}>
          <ul className={styles.nav_list_container}>
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
          <HamburgerIcon />
        </button>
      </div>
    </div>
  )
}

export default Header
