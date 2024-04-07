import React from 'react'
import styles from './ComponentGallery.module.css'
import NameIntro from '../../components/NameIntro/NameIntro'
import Section from '../../components/Section/Section'
import SkillGrid from '../../components/SkillGrid/SkillGrid'

const SkillGridData = {
  skills: [
    {
      name: 'AFFINITY MAPPING',
      image:
        'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg'
    },
    {
      name: 'PERSONAS',
      image:
        'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg'
    },
    {
      name: 'USABILITY TESTING',
      image:
        'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg'
    },
    {
      name: 'CARD SORT',
      image:
        'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg'
    },
    {
      name: 'PROTOTYPE',
      image:
        'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg'
    },
    {
      name: 'USER INTERVIEW',
      image:
        'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg'
    },
    {
      name: 'COMPETITIVE ANALYSIS',
      image:
        'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg'
    },
    {
      name: 'RESPONSIVE DESIGN ',
      image:
        'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg'
    },
    {
      name: '​USER FLOW',
      image:
        'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg'
    },
    {
      name: 'SKETCHING',
      image:
        'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg'
    },
    {
      name: 'SYNTHESIZE USER RESEARCH',
      image:
        'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg'
    },
    {
      name: 'VISUAL DESIGN',
      image:
        'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg'
    },
    {
      name: 'WIREFRAMING',
      image:
        'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg'
    }
  ],
  spacing: 20
}

function ComponentGallery() {
  return (
    <>
      {/* SkillGrid Component ------------------------------------- */}
      <div className={styles.root}>
        <div className={styles.title}>SkillGrid</div>
        <div className={styles.componentHolder}>
          <div className={styles.authorName}>Author: Rijin Mk</div>
          <SkillGrid {...SkillGridData} />
        </div>
      </div>

      {/* NameIntro Component ------------------------------------- */}
      <div className={styles.root}>
        <div className={styles.title}>NameIntro</div>
        <div className={styles.componentHolder}>
          <div className={styles.authorName}>Author: Rijin Mk</div>
          <NameIntro name='Rijin Mukundan' subtitle='Front-End Engineer' />
        </div>
      </div>

      {/* Section Component ------------------------------------- */}
      <div className={styles.root}>
        <div className={styles.title}>Section</div>
        <div className={styles.componentHolder}>
          <div className={styles.authorName}>Author: Rijin Mk</div>
          <Section backgroundImageURL='https://picsum.photos/1080/720?grayscale'>
            <h1>SECTION 1</h1>
          </Section>
          <Section backgroundImageURL='https://picsum.photos/seed/picsum/1080/720'>
            <h1>SECTION 2</h1>
          </Section>
        </div>
      </div>
    </>
  )
}

export default ComponentGallery
