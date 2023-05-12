import React from 'react'
import FormNameUser from '../components/FormNameUser'
import './styles/home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <article className='home'>
        <div className='home-elements'>
          <div className='home-title'></div>
          <h2 className='home-welcome'>Hi Trainer!</h2>
          <p className='home-giveuser'>To start in this application give me your name</p>
          <FormNameUser/>
        </div>
        <div className='home-footer'></div>
      </article>
    </div>
  )
}

export default Home