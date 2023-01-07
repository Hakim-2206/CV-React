import React from 'react'
import "./User.css"
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function User() {
  return (
    <div className='user'>
      <img className='user__avatar' src="./images/CV_img.jpg" alt=""></img>
      <h1 className='user__name'>Hakim Zaabi</h1>
      <p className='user__profession'>Développeur web Junior</p> 
      <div className='user__infos'>
        <p className='user__info'>
          <HomeIcon /> 06000 Nice, France</p>
        <p className='user__info'>
          <a href='tel:+33667329097'>
          <LocalPhoneIcon />06.67.32.90.97</a>
        </p>
        <p className='user__info'>
          <a href='mailto:hakim.hakim2206@gmail.com'>
          <MailIcon />hakim.hakim2206@gmail.com</a>
        </p>
        <p className='user__info'>
        <EventIcon />Date de naissance : 22 juin 1996</p>
        <p className='user__info'>
        <LocationOnIcon />Lieu de naissance : Nice</p>
      </div>
    </div>
  )
}

export default User