import React from 'react'
import styles from './ExperienceTimeline.module.css'

function ExperienceTimeline() {
  return (
    <div className={styles.root}>
      {/* Experience 1 */}
      <div className={styles.experienceLine} />
      <div className={styles.experienceContainer}>
        <div className={styles.experienceDot} />
        <p className={styles.dateRange}>Oct 2022 - Jan 2023</p>
        <h2>GA User Experience Immersive Course, Remote</h2>
        <p className={styles.experienceType}>Student</p>
        <div className={styles.experienceRichText}>
          Bootcamp course which covered important topics with the help of weekly projects and a
          final client project.
          <ul>
            <li>User Research</li>
            <li>Insights and Personas</li>
            <li>Sketching</li>
            <li>Maps and Flows</li>
            <li>Wireframes to Prototypes</li>
            <li>Usability Testing</li>
            <li>Visual Design</li>
            <li>Design Systems and Patterns</li>
          </ul>
        </div>
      </div>

      {/* Experience 2 */}
      <div className={styles.experienceContainer}>
        <div className={styles.experienceDot} />
        <p className={styles.dateRange}>Feb 2020 - Oct 2020</p>
        <h2>Quickwork Technologies Private Limited, Mumbai, India</h2>
        <p className={styles.experienceType}>Video Editing Consultant</p>
        <div className={styles.experienceRichText}>
          My main tasks were creating/editing Product and Concept explainer videos on After Effects
          and Premiere Pro, and creating Sales videos using an online animation software called
          Powtoon. And also created images and animations for their website.
        </div>
      </div>

      {/* Experience 3 */}
      <div className={styles.experienceContainer}>
        <div className={styles.experienceDot} />
        <p className={styles.dateRange}>Oct 2019 - Nov 2019</p>
        <h2>Pearl Quest, Dubai, U.A.E</h2>
        <p className={styles.experienceType}>Video Editing Consultant</p>
        <div className={styles.experienceRichText}>
          <ul>
            <li>Created a UI for a Quiz Game for DEWA.</li>
            <li>Created Lip-Sync for a 3D-Model for ADNOC.</li>
            <li>Helped design a Multi-Touchscreen Table-top for ADIPEC'20.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExperienceTimeline
