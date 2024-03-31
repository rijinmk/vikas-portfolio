import React from 'react'
import Section from '../../components/Section/Section'

function HomePage() {
  return (
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
    </>
  )
}

export default HomePage
