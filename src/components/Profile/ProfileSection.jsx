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
             value={values.firstName}
             onChange={handleChange} 
             />
            <label>Last Name*</label>
            <FormInput
             type="text"
             name="lastName"
             value={values.lastName}
             onChange={handleChange}/>
            <label>Email</label>
            <FormInput
            type="email"
            name="email"
            value={values.email} 
            onChange={handleChange}/>
            <label>Phone Number</label>
            <FormInput
            type='number'
            name='phoneNumber'
            value={values.phoneNumber}
            onChange={handleChange}/>
           </ProfileForm>
        </ProfileFormContainer>
    </ProfileSectionContainer>
  )
}

export default ProfileSection