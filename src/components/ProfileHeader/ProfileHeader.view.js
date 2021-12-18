import React from 'react'
import { NavLink } from './ProfileHeader.styled'
import image from '../../images/settings.png'

const ProfileHeader = () => {
    return(
        <>
        <h2 className='profile'>
            Profile
        </h2>
        <NavLink to='/profile-setting'>
            <img src={image} alt={'Logo'} style={{height:"70px"}}/>
        </NavLink>

        </>
    )
}

export default ProfileHeader
