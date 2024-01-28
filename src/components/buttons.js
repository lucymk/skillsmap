import React from 'react'
import { Link } from 'gatsby'
import {
  button,
  skillsButton,
  skillIcon,
  subjectTag,
  subjectTagContainer,
  subjectTagSelected,
  subjectTagUnselected,
  subjectButtonName,
  subjectButtonSelected,
  actionButton,
  skillsMapButton,
  subjectButton,
  subjectGridAndButton,
  subjectGrid,
} from './buttons.module.css'
import SkillIconSvg from '../assets/icons/skillIcon.svg'
import ChevronLeftSvg from '../assets/icons/chevronLeft.svg'
import ChevronRightSvg from '../assets/icons/chevronRight.svg'
import SkillsMapSimpleLogo from '../assets/icons/skillsMapSimpleLogo.svg'

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

export function SubjectTag({
  setInactivatedSubjects,
  inactivatedSubjects,
  subject,
  children,
}) {
  return (
    <span
      onClick={() => {
        setInactivatedSubjects((prevSubjects) => {
          return { ...prevSubjects, [subject]: !prevSubjects[subject] }
        })
      }}
      className={
        inactivatedSubjects[subject]
          ? `${subjectTag} ${subjectTagUnselected}`
          : `${subjectTag} ${subjectTagSelected}`
      }
    >
      {children}
    </span>
  )
}

export function SubjectButton({
  subjectName,
  setSelectedSubjects,
  selectedSubjects,
  selectedSubjectCount,
}) {
  const subjectButtonOnClick = () => {
    if (selectedSubjectCount < 3) {
      setSelectedSubjects({
        ...selectedSubjects,
        [subjectName]: !selectedSubjects[subjectName],
      })
    } else if (selectedSubjectCount == 3 && selectedSubjects[subjectName]) {
      setSelectedSubjects({
        ...selectedSubjects,
        [subjectName]: !selectedSubjects[subjectName],
      })
    } else return
  }
  return (
    <button
      className={
        selectedSubjects[subjectName]
          ? `${subjectButton} ${subjectButtonSelected}`
          : `${subjectButton}`
      }
      style={{
        cursor:
          selectedSubjectCount < 3 ||
          (selectedSubjectCount == 3 && selectedSubjects[subjectName])
            ? `pointer`
            : '',
      }}
      onClick={() => {
        subjectButtonOnClick()
      }}
    >
      <div className={`${subjectButtonName}`}>{subjectName}</div>
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
        <SkillsMapSimpleLogo width="100px" height="auto" />
        Search subjects
      </button>
    </Link>
  )
}

export function SubjectTags({
  setInactivatedSubjects,
  inactivatedSubjects,
  subjectsArray,
}) {
  return (
    <div className={`${subjectTagContainer}`}>
      {subjectsArray.map((subject) => {
        return (
          <SubjectTag
            setInactivatedSubjects={setInactivatedSubjects}
            inactivatedSubjects={inactivatedSubjects}
            subject={subject}
            key={subject}
          >
            {subject}
          </SubjectTag>
        )
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

export function SubjectGridAndButton({ children }) {
  return <div className={`${subjectGridAndButton}`}>{children}</div>
}

export function SubjectGrid({ children }) {
  return <div className={`${subjectGrid}`}>{children}</div>
}
