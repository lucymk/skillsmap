import React from 'react'
import { skillsButton, skillIcon, subjectTag } from './buttons.module.css'
import SkillIconSvg from '../assets/icons/skillIcon.svg'
import ChevronRightSvg from '../assets/icons/chevronRight.svg'

export function SkillsButton({ children }) {
  return (
    <button className={`${skillsButton}`}>
      <SkillIconSvg className={`${skillIcon}`} />
      {children}
      <ChevronRightSvg />
    </button>
  )
}

export function SubjectTag({ children }) {
  return <span className={`${subjectTag}`}>{children}</span>
}
