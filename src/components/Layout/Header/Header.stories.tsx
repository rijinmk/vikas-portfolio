import React from 'react'
import type { StoryObj } from '@storybook/react'
import Header from './Header'
import Logo from '../../../assets/Logo/vikas_logo.svg'

const meta = {
  title: 'Vikas Portfolio/Header',
  component: Header,
  argTypes: {
    children: { table: { disable: true } }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  args: {
    logo: Logo,
    navItems: ['HOME', 'PROJECTS', 'SKILLS', 'EXPERIENCE', 'CONTACT'],
    onNavItemClick: () => {},
    activeItem: '',
    bgColor: '#0f0f0f84',
    textColor: '#FFFFFF',
  }
}
