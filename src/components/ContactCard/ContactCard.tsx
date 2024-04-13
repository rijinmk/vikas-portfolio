import React, { ReactNode } from 'react'
import styles from './ContactCard.module.css'

interface ContactCardProps {
  description?: string
  email?: string
  mobileNumbers?: string[]
  sectionHeading: ReactNode
  socials: {
    icon: string
    link: string
  }[]
}

export default function ContactCard({
  description,
  email,
  mobileNumbers,
  sectionHeading,
  socials
}: ContactCardProps) {
  const handleSocialLink = (socialLink: string) => {
    window.open(socialLink, '_blank')?.focus()
  }

  return (
    <div className={styles.root}>
      { sectionHeading }
      <p className={styles.contact_description}>{description}</p>

      <a className={styles.email} href={`mailto:${email}`}>{email}</a>

      <div className={styles.mobile_numbers_container}>
        <span>Mob:</span>
        <div className={styles.numbers_container}>
          {mobileNumbers?.map((eachNumber) => <a key={eachNumber} href={`tel:${eachNumber}`}>{eachNumber}</a>)}
        </div>
      </div>
      <div className={styles.socials_container}>
        {socials.map((eachSocialObj) => (
          <div className={styles.social_container} key={eachSocialObj.link}>
            <button className={styles.social_button} type='button' onClick={() => handleSocialLink(eachSocialObj.link)}>
              <img className={styles.social_icon} src={`${eachSocialObj.icon}`} alt='social' />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
