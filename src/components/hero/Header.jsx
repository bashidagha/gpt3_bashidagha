import React from 'react'
import Navbar from '../navbar/Navbar'
import './header.scss'
import Icon from '../../container/Icon'

const Header = () => {
  return (
    <div className='header'>
    <Navbar/>

        <div className='hero'>
            <div className='hero-title'>
                <h1>Let's Build Something amazing with GPT-3 OpenAI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className='hero-title-inputs'>
                    <input type="email" placeholder='Your Email Address'></input>
                    <button className='gpt3_btn btn-getstarted'>Get Started</button>
                </div>
                <div className="last_people">
                    <Icon name="people"/>
                    <div>1,600 people requested access a visit in last 24 hours</div>
                </div>
            </div>
            <div className='hero-image-container'>
            </div>
        </div>


    <div className='company-icons'>
        <Icon name="google"/>
        <Icon name="slack"/>
        <Icon name="dropbox"/>
        <Icon name="shopify"/>
        <Icon name="atlassian"/>
    </div>

    </div>
  )
}

export default Header