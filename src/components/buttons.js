import React from 'react'
import { skillsButton, skillIcon } from './buttons.module.css'
import SkillIconSvg from '../assets/icons/skillIcon.svg'
import ChevronRightSvg from '../assets/icons/chevronRight.svg'

export function SkillsButton({ children }) {
  return (
    <button className={`${skillsButton}`}>
      <SkillIconSvg />
      {children}
      <ChevronRightSvg />
    </button>
  )
}
