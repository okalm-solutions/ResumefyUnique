import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { FormInput, ProfileForm,  } from "../Profile/ProfileSection.styles"
import {Header, FormContainer } from '../common/Common.styles'
import {ExperienceContainer, ExperienceFormContainer} from './ExperienceSection.styles'

const ExperienceSection = ({values, setWork}) => {
    const dispatch = useDispatch();

    const handleChange=(e)=>{
        dispatch(setWork(e.target))
    };  
  return (
    <ExperienceContainer>
        <Header>Experience</Header>
        <FormContainer>
            <ExperienceFormContainer>
                <ProfileForm>
                    <label>Company Name</label>
                    <FormInput
                    type="text"
                    value={values.company}
                    name="company"
                    onChange={handleChange}/>
                    <label>Start Date</label>
                    <FormInput
                    type="text"
                    value={values.startDate}
                    name="startDate"
                    onChange={handleChange}/>
                    <label>Location</label>
                    <FormInput
                    type="text"
                    value={values.location}
                    name="location"
                    onChange={handleChange}/>
                </ProfileForm>
            </ExperienceFormContainer>
            <ExperienceFormContainer>
                <ProfileForm>
                <label>Role / Title</label>
                    <FormInput
                    type="text"
                    value={values.position}
                    name='position'
                    onChange={handleChange}
                    />
                    <label>End Date</label>
                    <FormInput
                    type="datetime-local"
                    name="endDate"
                    value={values.endDate}
                    onChange={handleChange}
                    />
                    <label>Duties</label>
                    <FormInput/>
                </ProfileForm>
            </ExperienceFormContainer>
        </FormContainer>
    </ExperienceContainer>
  )
}

export default ExperienceSection