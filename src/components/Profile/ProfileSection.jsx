import React from 'react'
import {ProfileForm,
ProfileSectionContainer, 
Heading, 
ProfileFormContainer, 
ButtonContainer, 
BackButton, 
NextButton, 
FormInput } from './ProfileSection.styles'

const ProfileSection = () => {
  return (
    <ProfileSectionContainer>
        <Heading>Profile Section</Heading>
        <ProfileFormContainer>
           <ProfileForm>
           <label>First Name*</label>
            <FormInput type="text"/>
            <label>Last Name*</label>
            <FormInput type="text"/>
            <label>Email</label>
            <FormInput type="text"/>
            <label>Phone Number</label>
            <FormInput type="text"/>
           </ProfileForm>
            <ButtonContainer>
                <BackButton>Back</BackButton>
                <NextButton>Next</NextButton>
            </ButtonContainer>
        </ProfileFormContainer>
    </ProfileSectionContainer>
  )
}

export default ProfileSection