import React from 'react'
import type { StoryObj } from '@storybook/react'
import Section from './Section'

const meta = {
  title: 'Vikas Portfolio/Section',
  component: Section,
  argTypes: {
    children: { table: { disable: true } }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  args: {
    backgroundImageURL: 'https://picsum.photos/seed/picsum/1080/720',
    children: <h1>Hello</h1>
  }
}

export const Grouped: Story = {
  // @ts-expect-error Grouped Story don't need arguments
  args: {},
  render: () => (
    <>
      <Section backgroundImageURL='https://picsum.photos/seed/picsum/1080/720'>
        <h1>SECTION 1</h1>
      </Section>
      <Section backgroundImageURL='https://picsum.photos/1080/720?grayscale'>
        <h1>SECTION 2</h1>
      </Section>
      <Section backgroundImageURL='https://picsum.photos/1080/720'>
        <h1>SECTION 3</h1>
      </Section>
      <Section backgroundImageURL='https://picsum.photos/seed/picsum/1080/720'>
        <h1>SECTION 4</h1>
      </Section>
    </>
  )
}
