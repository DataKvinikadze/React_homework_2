import React from 'react'
import Button from '../buttons/Button'
import Social from '../socials/Social'
import Profile from '../profile/Profile'

const Main = ({socials, BtnContent}) => {

  const pfp = []

  return (
  <>
  <main>
    <section className='MainSection'>
      <div className="section-container">
        <div className="section-content">
          <div className="left-side">
            <div className="title">
              <h1>Hi, I am <br />Chukwukwe Chisom</h1>
            </div>
            <div className="job">
              <span>Frontend Developer</span>
            </div>
            <Button BtnContent={BtnContent}/>
            <Social socials={socials}/>
          </div>
          <div className="right-side">
            <Profile />
          </div>
        </div>
      </div>
    </section>
  </main>
  </>
  )
}

export default Main
