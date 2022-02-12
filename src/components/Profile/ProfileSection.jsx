import React from 'react'
import {ProfileForm,
ProfileSectionContainer, 
Heading, 
ProfileFormContainer, 
FormInput } from './ProfileSection.styles'

const ProfileSection = ({handleChange, values}) => {
  return (
    <ProfileSectionContainer>
        <Heading>Profile Section</Heading>
        <ProfileFormContainer>
           <ProfileForm>
           <label>First Name*</label>
            <FormInput
             type="text"
             name="firstName"
             values={values.firstName}
             onChange={handleChange} 
             />
            <label>Last Name*</label>
            <FormInput onChange={handleChange} type="text"/>
            <label>Email</label>
            <FormInput onChange={handleChange}type="text"/>
            <label>Phone Number</label>
            <FormInput onChange={handleChange} type="text"/>
           </ProfileForm>
        </ProfileFormContainer>
    </ProfileSectionContainer>
  )
}

export default ProfileSection