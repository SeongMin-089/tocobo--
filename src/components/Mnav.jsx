import React from 'react'
import Util from './Util'
import { headerData } from '../util/header'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import './styles/Mnav.scss'
const Mnav = ({ onNavClose }) => {
  const navLink = headerData.menus
  const scrollTo = useSmoothScroll()
  return (
    <div className='m-nav-wrap'>
      <div className="m-top">
        <Util />
        <a href="#" className='m-close-btn' onClick={(e) => {
          e.preventDefault()
          onNavClose()
        }}>
          <img src="/img/icon_search_close.png" alt="icon" />
        </a>
      </div>
      <ul className="m-nav-list">
        {navLink.map((nav, i) => (
          <li key={i}>
            <a
              href={`${nav.href}`}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(nav.id)
                onNavClose()
              }}

            >
              {nav.label}
            </a>
          </li>
        ))}
      </ul>
      <ul className="btm-list">
        <li><a href="#">login</a></li>
        <li><a href="#">sign up</a></li>
        <li><a href="#">notice</a></li>
      </ul>

    </div>
  )
}

export default Mnav