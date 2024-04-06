import React from 'react'
import styles from './ComponentGallery.module.css'
import NameIntro from '../../components/NameIntro/NameIntro'
import Section from '../../components/Section/Section'
import SkillGrid from '../../components/SkillGrid/SkillGrid'

function ComponentGallery() {
  return (
    <>
      {/* NameIntro Component ------------------------------------- */}
      <div className={styles.root}>
        <div className={styles.title}>NameIntro</div>
        <div className={styles.componentHolder}>
          <div className={styles.authorName}>Author: Rijin Mk</div>
          <NameIntro name='Rijin Mukundan' subtitle='Front-End Engineer' />
        </div>
      </div>

      {/* SkillGrid Component ------------------------------------- */}
      <div className={styles.root}>
        <div className={styles.title}>SkillGrid</div>
        <div className={styles.componentHolder}>
          <div className={styles.authorName}>Author: Vikas Prakash</div>
          <SkillGrid />
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
