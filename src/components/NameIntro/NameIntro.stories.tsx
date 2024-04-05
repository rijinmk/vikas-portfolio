import React from 'react'
import type { StoryObj } from '@storybook/react'
import NameIntro from './NameIntro'
import '../../global.css'

const meta = {
  title: 'Vikas Portfolio/NameIntro',
  component: NameIntro
}

export default meta
type Story = StoryObj<typeof meta>

export const ShortName: Story = {
  args: {
    names: 'Rijin'
  }
}

export const FullName: Story = {
  args: {
    names: 'Rijin Mukundan'
  }
}

export const VeryLongNames: Story = {
  args: {
    names: 'Zayed bin Sultan Al Nahyan'
  }
}
