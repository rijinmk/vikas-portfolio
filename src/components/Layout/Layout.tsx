import React, { useState } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Logo from '../../assets/Logo/vikas_logo.svg'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const [activeItem, setActiveItem] = useState<string>('HOME')

  const handleNavigation = (section: string) => {
    setActiveItem(section)
  }

  return (
    <>
      <Header
        logo={Logo}
        navItems={['HOME', 'PROJECTS', 'SKILLS', 'EXPERIENCE', 'CONTACT']}
        onNavItemClick={handleNavigation}
        activeItem={activeItem}
        bgColor='#0f0f0f84'
        textColor='#FFFFFF'
        fontFamily='Avenir Light, sans-serif'
        fontSize='16'
      />
      {children}
      <Footer />
    </>
  )
}

export default Layout
