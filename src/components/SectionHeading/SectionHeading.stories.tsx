import React from 'react'
import type { StoryObj } from '@storybook/react'
import SectionHeading from './SectionHeading'
import '../../global.css'

const meta = {
  title: 'Vikas Portfolio/SectionHeading',
  component: SectionHeading,
  argTypes: {
    children: { table: { disable: true } }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  args: {
    index: '02',
    subtitle: 'My latest work',
    title: 'My projects'
  }
}
