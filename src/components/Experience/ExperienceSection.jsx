import React from 'react';
import { useDispatch } from 'react-redux';
import { FormInput } from '../Profile/ProfileSection.styles';
import { Header, FormContainer } from '../common/Common.styles';
import {
    ExperienceContainer,
    ExperienceForm
} from './ExperienceSection.styles';

const ExperienceSection = ({ values, setWork }) => {
    // console.log(values);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(setWork(e.target));
    };
    // console.log(values);
    return (
        
        <ExperienceContainer>
            <Header>Experience</Header>
            <FormContainer>
                {/* {console.log(values)} */}
                <ExperienceForm>
                    <label>Company Name</label>
                    <FormInput
                        type="text"
                        value={values.company}
                        name="company"
                        onChange={handleChange}
                    />
                    <label>Role / Title</label>
                    <FormInput
                        type="text"
                        value={values.position}
                        name="position"
                        onChange={handleChange}
                    />
                    <label>Location</label>
                    <FormInput
                        type="text"
                        value={values.location}
                        name="location"
                        onChange={handleChange}
                    />
                    <label>Start Date</label>
                    <FormInput
                        type="text"
                        value={values.startDate}
                        name="startDate"
                        onChange={handleChange}
                    />
                    <label>End Date</label>
                    <FormInput
                        type="text"
                        name="endDate"
                        value={values.endDate}
                        onChange={handleChange}
                    />
                    <label>Duties</label>
                    <FormInput />
                </ExperienceForm>
            </FormContainer>
        </ExperienceContainer>
    );
};

export default ExperienceSection;
