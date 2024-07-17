import React from 'react'
import toggle from "/Vector.svg"
import Navigation from '../navigation/Navigation'
import styles from "./Header.module.scss"

const Header = ({navBarVal}) => {

  return (
  <>
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
            <Navigation navBarVal ={navBarVal} />
          <div className="toggle">
            <img src={toggle} alt="" />
          </div>
        </div>
      </div>
    </header>
  </>
  )
}

export default Header
