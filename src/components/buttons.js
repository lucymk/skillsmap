import React from 'react'
import { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {
  button,
  skillsButton,
  skillIcon,
  subjectTag,
  subjectButtonIcon,
  subjectButtonName,
  subjectButtonSelected,
  actionButton,
  skillsMapButton,
} from './buttons.module.css'
import SkillIconSvg from '../assets/icons/skillIcon.svg'
import ChevronLeftSvg from '../assets/icons/chevronLeft.svg'
import ChevronRightSvg from '../assets/icons/chevronRight.svg'

export function SkillsButton({ children }) {
  return (
    <button className={`${button} ${skillsButton}`}>
      <SkillIconSvg className={`${skillIcon}`} />
      {children}
      <ChevronRightSvg />
    </button>
  )
}

export function SubjectTag({ children }) {
  return <span className={`${subjectTag}`}>{children}</span>
}

export function SubjectButton({
  subjectIcon,
  subjectName,
  setSelectedSubjects,
  selectedSubjects,
}) {
  return (
    <button
      className={`${button}`}
      style={{
        justifyContent: 'left',
        width: 'var(--skills-button-width)',
      }}
      onClick={() => {
        setSelectedSubjects({
          ...selectedSubjects,
          [subjectName]: !selectedSubjects[subjectName],
        })
      }}
    >
      <img src={subjectIcon} className={`${subjectButtonIcon}`} />
      <div
        className={
          selectedSubjects[subjectName]
            ? `${subjectButtonName} ${subjectButtonSelected}`
            : `${subjectButtonName}`
        }
      >
        {subjectName}
      </div>
    </button>
  )
}

export function ActionButton({ children }) {
  return (
    <button className={`${button} ${actionButton}`}>
      <ChevronLeftSvg />
      {children}
      <ChevronRightSvg />
    </button>
  )
}

export function SkillsMapButton() {
  return (
    <button className={`${button} ${skillsMapButton}`}>
      <StaticImage width={100} src="../assets/icons/skillsMapSimpleLogo.png" />
      Search skills and subjects
    </button>
  )
}
