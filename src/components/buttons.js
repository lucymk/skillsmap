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

export function SubjectButton({ subjectIcon, subjectName }) {
  const [isSelected, toggleSelected] = useState(false)
  return (
    <button className={`${button}`} onClick={() => toggleSelected(!isSelected)}>
      <div className={`${subjectButtonIcon}`}>{subjectIcon}</div>
      <div
        className={
          isSelected
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

export function SkillsMapButton({ children }) {
  return (
    <button className={`${button} ${skillsMapButton}`}>
      <StaticImage src="../assets/icons/skillsMapSimpleLogo.png" />
      {children}
    </button>
  )
}
