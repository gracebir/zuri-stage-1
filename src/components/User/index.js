import React from 'react'
import './User.css';

function User() {
  return (
    <div className='user'>
      <div className="user__profile">
        <img id='profile__img' src="" alt="" className="profile_pic" />
      </div>
      <div className='user__name'>Annette Black</div>
    </div>
  )
}

export default User
