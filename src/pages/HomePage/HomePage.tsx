import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../../components/Section/Section'
import NameIntro from '../../components/NameIntro/NameIntro'
import data from './data.json'
import AboutMeCard from '../../components/AboutMeCard/AboutMeCard'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import SkillGrid from '../../components/SkillGrid/SkillGrid'
import styles from './HomePage.module.css'

function HomePage() {
  return (
    <>
      <Section backgroundImageURL='https://static.wixstatic.com/media/11062b_952485dce28e4eac9e9f09d63fdc9ada~mv2.jpg'>
        <div className={styles.nameIntro}>
          <div>
            <NameIntro {...data.NameIntro} />
          </div>
        </div>
      </Section>
      <div className={styles.aboutMeCard}>
        <div>
          <AboutMeCard {...data.AboutMeCard} />
        </div>
      </div>
      <Section
        paddingTop='500px'
        paddingBottom='300px'
        backgroundImageURL='https://static.wixstatic.com/media/035244_9f46dd7c6e524eef94172c670fff1913~mv2_d_1920_1343_s_2.jpg/v1/fill/w_1413,h_1343,al_c,q_85,enc_auto/035244_9f46dd7c6e524eef94172c670fff1913~mv2_d_1920_1343_s_2.jpg'
      >
        <SectionHeading {...data.SectionHeading} />
        <pre style={{ textAlign: 'center' }}>Coming Soon.</pre>
        <SectionHeading {...data.SectionHeading} />
        <SkillGrid {...data.SkillGrid} />
      </Section>
    </>
  )
}

export default HomePage
