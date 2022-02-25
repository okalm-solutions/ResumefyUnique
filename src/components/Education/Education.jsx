import React, {useEffect} from 'react'
import {EducationForm,
EducationSectionContainer, 
Heading, 
EducationFormContainer, 
Container,
FormInput } from './EducationSection.styles'
import {useDispatch, useSelector } from "react-redux";
import { setEducation } from '../../pages/Resume/ResumeSlice'



const EducationSection = () => {
    
    const values = useSelector(state => state.resume.values.education)
    const dispatch = useDispatch();

     const handleChange = (e) => {
         e.preventDefault();
         dispatch(setEducation(e.target));
        //  console.log(index)
        // console.log("hello")
     };
     useEffect(() => {
        //  console.log(values)
     },[values])
  return (
      <Container>{
          values.map((education, index)=>(
            <EducationSectionContainer key={index}>
                {/* <Heading>Education Section</Heading> */}
                 <EducationFormContainer>
                    <EducationForm>
                       <label>Institution Name</label>
                      <FormInput
                        type="text"
                        name="institution"
                        value={education.institution}
                        onChange={handleChange}
                      />
                      <label>Location</label>
                    <FormInput
                        type="text"
                        name="location"
                        value={values.location}
                        onChange={handleChange}/>
                    <label>Area</label>
                    <FormInput
                        type="text"
                        name="area"
                        value={values.area} 
                        onChange={handleChange}/>
                    <label>Start Date</label>
                    <FormInput
                        type='text'
                        name='startDate'
                        value={values.phoneNumber}
                        onChange={handleChange}/>
                    <label>Start Date</label>
                    <FormInput
                        type='text'
                        name='endDate'
                        value={values.endDate}
                        onChange={handleChange}/>
                    <label>G.P.A</label>
                    <FormInput
                        type='text'
                        name='gpa'
                        value={values.gpa}
                        onChange={handleChange}/>
                    </EducationForm>
                  </EducationFormContainer>
                </EducationSectionContainer>
            ))
          }</Container>)

};



export default EducationSection;