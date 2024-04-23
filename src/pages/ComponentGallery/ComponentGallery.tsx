import React from 'react'
import styles from './ComponentGallery.module.css'
import NameIntro from '../../components/NameIntro/NameIntro'
import Section from '../../components/Section/Section'
import SkillGrid from '../../components/SkillGrid/SkillGrid'
import AboutMeCard from '../../components/AboutMeCard/AboutMeCard'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import data from './data.json'
import ContactCard from '../../components/ContactCard/ContactCard'
import CaseStudyTile from '../../components/CaseStudyTile/CaseStudyTile'

function ComponentGallery() {
  return (
    <>
      {/* CaseStudyTile Component ------------------------------------- */}
      <div className={styles.root}>
        <div className={styles.title}>CaseStudyTile</div>
        <div className={styles.componentHolder}>
          <div className={styles.authorName}>Author: Dayan</div>
          <CaseStudyTile {...data.CaseStudyTile} />
        </div>
      </div>

      {/* ContactCard Component ------------------------------------- */}
      <div className={styles.root}>
        <div className={styles.title}>ContactCard</div>
        <div className={styles.componentHolder}>
          <div className={styles.authorName}>Author: Dayan</div>
          <ContactCard
            sectionHeading={<SectionHeading {...data.ContactCard.SectionHeading} />}
            {...data.ContactCard}
          />
        </div>
      </div>

      {/* SkillGrid Component ------------------------------------- */}
      <div className={styles.root}>
        <div className={styles.title}>SkillGrid</div>
        <div className={styles.componentHolder}>
          <div className={styles.authorName}>Author: Rijin Mk</div>
          <SkillGrid {...data.SkillGrid} />
        </div>
      </div>

      {/* Section Heading Component ------------------------------------- */}
      <div className={styles.root}>
        <div className={styles.title}>SectionHeading</div>
        <div className={styles.componentHolder}>
          <div className={styles.authorName}>Author: Dayan</div>
          <SectionHeading {...data.SectionHeading} />
        </div>
      </div>

      {/* NameIntro Component ------------------------------------- */}
      <div className={styles.root}>
        <div className={styles.title}>NameIntro</div>
        <div className={styles.componentHolder}>
          <div className={styles.authorName}>Author: Rijin Mk</div>
          <NameIntro {...data.NameIntro} />
        </div>
      </div>

      {/* Section Component ------------------------------------- */}
      <div className={styles.root}>
        <div className={styles.title}>Section</div>
        <div className={styles.componentHolder}>
          <div className={styles.authorName}>Author: Rijin Mk</div>
          <Section {...data.Section}>
            <h1>SECTION 1</h1>
          </Section>
        </div>
      </div>

      {/* AboutMeCard Component */}
      <div className={styles.root}>
        <div className={styles.title}>About Me Card</div>
        <div className={styles.componentHolder}>
          <div className={styles.authorName}>Author: Hexisbad</div>
          <AboutMeCard {...data.AboutMeCard} />
        </div>
      </div>
    </>
  )
}

export default ComponentGallery
