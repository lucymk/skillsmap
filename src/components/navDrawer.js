import React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
  navDrawer,
  navDrawerContents,
  navDrawerButton,
  menuItems,
} from './navDrawer.module.css'
import MenuBurgerSvg from '../assets/icons/menuBurger.svg'
import MenuCloseSvg from '../assets/icons/menuClose.svg'

function MenuItems({ items }) {
  return (
    <div className={`${menuItems}`}>
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

export default function NavDrawer({ children }) {
  const [isSelected, toggleSelected] = useState(false)

  return (
    <div
      className={`${navDrawer}`}
      style={{
        backgroundColor: isSelected
          ? 'var(--background-grey)'
          : 'var(--light-blue)',
      }}
    >
      <div className={`${navDrawerContents}`} style={{ gap: '157px' }}>
        <div className={`${navDrawerContents}`} style={{ gap: '60px' }}>
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
          <MenuItems />
        </div>

        <StaticImage src="../assets/icons/skillsMapLogo.png" />
      </div>
    </div>
  )
}
