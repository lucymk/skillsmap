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
} from './navDrawer.module.css'
import MenuBurgerSvg from '../assets/icons/menuBurger.svg'
import MenuCloseSvg from '../assets/icons/menuClose.svg'

function MenuItems({ visible }) {
  return (
    <div
      className={visible ? `${menuItems}` : `${menuItems} ${hiddenMenuItems}`}
    >
      <Link>Home</Link>
      <Link>Skillsmap search</Link>
      <Link>For learners</Link>
      <Link>For educators</Link>
      <Link>For careers professionals</Link>
      <Link>About</Link>
      <Link>Resources</Link>
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
