import React, { useState } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Logo from '../../assets/images/svg/vikas_logo.svg'

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
      />
      {children}
      <Footer logo={Logo} copyrightNotice='© 2024 by Vikas Prakash' />
    </>
  )
}

export default Layout
