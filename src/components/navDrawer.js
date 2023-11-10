import React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { navDrawer, menuItems } from './navDrawer.module.css'
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
    <div className={`${navDrawer}`}>
      <button
        onClick={() => toggleSelected(!isSelected)}
        style={{ border: 'none', background: 'none' }}
      >
        {isSelected ? <MenuBurgerSvg /> : <MenuCloseSvg />}
      </button>
      <MenuItems />
      <StaticImage src="../assets/icons/skillsMapLogo.png" />
    </div>
  )
}
