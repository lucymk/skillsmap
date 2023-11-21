import React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
  navDrawer,
  navDrawerContentsOuter,
  navDrawerContentsInner,
  navDrawerButton,
  menuItems,
  hiddenMenuItems,
  navLink,
  activeNavLink,
} from './navDrawer.module.css'
import MenuBurgerSvg from '../assets/icons/menuBurger.svg'
import MenuCloseSvg from '../assets/icons/menuClose.svg'

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
      <NavLink to="/forLearners">For learners</NavLink>
      <NavLink to="/forEducators">For educators</NavLink>
      <NavLink to="/forCareersProfessionals">For careers professionals</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  )
}

export default function NavDrawer({ style }) {
  const [isSelected, toggleSelected] = useState(false)

  return (
    <div
      className={`${navDrawer}`}
      style={Object.assign(
        {
          backgroundColor: isSelected
            ? 'var(--background-grey)'
            : 'var(--light-blue)',
        },
        style
      )}
    >
      <div className={`${navDrawerContentsOuter}`}>
        <div className={`${navDrawerContentsInner}`}>
          <button
            className={`${navDrawerButton}`}
            onClick={() => toggleSelected(!isSelected)}
          >
            {isSelected ? (
              <MenuCloseSvg fill="var(--dark-grey)" />
            ) : (
              <MenuBurgerSvg />
            )}
          </button>
          <MenuItems visible={isSelected} />
        </div>
        <StaticImage src="../assets/icons/skillsMapLogo.png" />
      </div>
    </div>
  )
}
