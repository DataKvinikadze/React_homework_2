import React from 'react'
import styles from "./Navigation.module.scss"

const Navigation = ({navBarVal}) => {
  console.log(navBarVal);
  const Value = navBarVal.map((item)=>{
    return(
      <li key={item}>{item}</li>
    )
  })
  return (
    <>
    <nav>
      <div className={styles.nav}>
        <ul>
          {Value}
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navigation
