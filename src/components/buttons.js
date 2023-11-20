import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
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

export function SkillsButton({ skill, originPath }) {
  return (
    <Link
      to={
        originPath && originPath.includes('skillsmapTool')
          ? `../skills/${skill.replace(/\s/g, '+')}`
          : `../../skills/${skill.replace(/\s/g, '+')}`
      }
      state={{ originPath: originPath }}
      className={`${button} ${skillsButton}`}
    >
      <SkillIconSvg className={`${skillIcon}`} />
      {skill}
      <ChevronRightSvg height="20px" />
    </Link>
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

export function ActionButton({ leftActive, rightActive, children }) {
  return (
    <button className={`${button} ${actionButton}`}>
      {leftActive && <ChevronLeftSvg height="20px" />}
      {children}
      {rightActive && <ChevronRightSvg height="20px" />}
    </button>
  )
}

export function SkillsMapButton() {
  return (
    <Link to="/skillsmapTool">
      <button className={`${button} ${skillsMapButton}`}>
        <StaticImage
          width={100}
          src="../assets/icons/skillsMapSimpleLogo.png"
        />
        Search skills and subjects
      </button>
    </Link>
  )
}

export function SubjectTags({ subjectsArray }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--spacing-m)',
        paddingBottom: 'var(--spacing-s)',
      }}
    >
      {subjectsArray.map((subject) => {
        return <SubjectTag key={subject}>{subject}</SubjectTag>
      })}
    </div>
  )
}

export function SkillsButtons({ skillsArray, originPath }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-s)',
        paddingBottom: 'var(--spacing-l)',
      }}
    >
      {skillsArray.map((skill) => {
        return (
          <SkillsButton originPath={originPath} key={skill} skill={skill} />
        )
      })}
    </div>
  )
}
