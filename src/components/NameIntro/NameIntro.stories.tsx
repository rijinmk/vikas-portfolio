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
    name: 'Rijin'
  }
}

export const FullName: Story = {
  args: {
    name: 'Rijin Mukundan'
  }
}

export const VeryLongNames: Story = {
  args: {
    name: 'Zayed bin Sultan Al Nahyan'
  }
}
