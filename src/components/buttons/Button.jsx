import React from 'react'
import styles from "./Button.module.scss"

const Button = ({BtnContent}) => {
  return (
    <>
    <div className={styles.btnContainer}>
      <button>{BtnContent}</button>
    </div>
    </>
  )
}

export default Button
