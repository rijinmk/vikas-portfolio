import type { StoryObj } from '@storybook/react'
import AboutMeCard from './AboutMeCard'
import '../../global.css'

const meta = {
  title: 'Vikas Portfolio/AboutMeCard',
  component: AboutMeCard,
  argTypes: {
    children: { table: { disable: true } }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  args: {
    profileIcon: '',
    title: 'About Me',
    description: `
    I am a UI/UX Designer and an avid VFX and gaming fan. Although I have experience with programming, my passion is for creating new designs with ease.‌With a degree in Software Engineering, intensive training in UX design research, and a knack for creating killer content, motion graphics, and graphic design - I'm a total tech whiz!My strong creative and technical expertise enables me to create interactive prototypes, tell gripping tales, and eliminate the communication gap between designers and programmers when bringing concepts from conception to completion.‌I believe that good design can make a difference in people's lives. By developing experiences that are more beneficial, usable, pleasurable, and human, I hope to make a difference!
    `
  }
}
