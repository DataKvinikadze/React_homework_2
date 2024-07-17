import React from 'react'
import styles from "./Social.module.scss"

const Social = ({socials}) => {
  console.log(socials);
  const social = socials.map((item, index)=>{
    return(
      <img key={index} src={item} alt="" />
    )
  })
  return (
    <>
    <div className={styles.socials}>
      {social}
    </div>
    </>
  )
}

export default Social
