import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
  navDrawer,
  navDrawerContentsOuter,
  navDrawerContentsInner,
  menuItems,
  hiddenMenuItems,
  navLink,
  activeNavLink,
  smallScreenMenuIcon,
} from './navDrawer.module.css'
import MenuBurgerSvg from '../assets/icons/menuBurger.svg'
import MenuCloseSvg from '../assets/icons/menuClose.svg'
import SkillsMapLogo from '../assets/media/skillsMapLogo.svg'

function MenuItems({ visible }) {
  const NavLink = ({ children, to }) => (
    <Link
      activeClassName={`${activeNavLink}`}
      className={`${navLink}`}
      to={to}
      partiallyActive={true}
    >
      {children}
    </Link>
  )

  return (
    <div
      className={visible ? `${menuItems}` : `${menuItems} ${hiddenMenuItems}`}
    >
      <Link
        activeClassName={`${activeNavLink}`}
        className={`${navLink}`}
        to="/"
      >
        Home
      </Link>
      <NavLink to="/skillsmapTool">SkillsMap® Tool</NavLink>
      <NavLink to="/forLearners">For Learners</NavLink>
      <NavLink to="/forEducators">For Educators</NavLink>
      <NavLink to="/forCareersProfessionals">For Careers Professionals</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  )
}

export default function NavDrawer({ style }) {
  const [isSelected, toggleSelected] = useState(false)
  const [isSmallScreen, toggleIsSmallScreen] = useState(false)

  useEffect(() => {
    window.screen.width < 1024 && toggleIsSmallScreen(true)
  }, [])

  useEffect(() => {
    if (isSelected && isSmallScreen) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [isSelected, isSmallScreen])

  return (
    <>
      <div
        className={`${navDrawer}`}
        style={Object.assign(
          {
            backgroundColor:
              isSelected && isSmallScreen
                ? 'var(--background-grey)'
                : 'var(--light-blue)',
          },
          {
            display: isSmallScreen && !isSelected ? 'none' : 'flex',
          },
          style
        )}
      >
        <div className={`${navDrawerContentsOuter}`}>
          <div className={`${navDrawerContentsInner}`}>
            {isSmallScreen && (
              <button
                className={`${smallScreenMenuIcon}`}
                onClick={() => toggleSelected(!isSelected)}
              >
                <MenuCloseSvg fill="var(--dark-grey)" />
              </button>
            )}
            <MenuItems visible={true} />
          </div>
          <div
            style={{
              display: 'flex',
              font: 'var(--font-caption)',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 'var(--spacing-xs)',
              alignItems: 'center',
            }}
          >
            <SkillsMapLogo style={{ width: '100%', height: 'auto' }} />
            <span>
              Site by{' '}
              <a
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'var(--dark-blue)',
                  textDecoration: 'underline',
                }}
                href="https://lucyking.notion.site/Lucy-King-Research-Product-UX-Design-Development-82c9ac2a0be549c29af394c38efd891e"
              >
                Lucy King
              </a>{' '}
              🤍
            </span>
          </div>
          {/* <StaticImage
            alt="SkillsMap logo"
            placeholder="none"
            src="../assets/icons/skillsMapLogo.png"
          /> */}
        </div>
      </div>

      {isSmallScreen && !isSelected && (
        <MenuBurgerSvg
          className={`${smallScreenMenuIcon}`}
          onClick={() => toggleSelected(!isSelected)}
        />
      )}
    </>
  )
}
