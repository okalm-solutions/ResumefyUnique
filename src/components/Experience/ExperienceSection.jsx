import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormInput } from "../Profile/ProfileSection.styles";
import { Header, FormContainer } from "../common/Common.styles";
import {
    ExperienceContainer,
    ExperienceForm
} from "./ExperienceSection.styles";
import { setWork } from "../../pages/Resume/ResumeSlice";

const ExperienceSection = () => {
    const dispatch = useDispatch();
    const values = useSelector((state) => state.resume.values.work);

    const handleChange = (e) => {
        dispatch(setWork(e.target));
    };
    return values.map((work, index) => {
        return (
            <ExperienceContainer key={index}>
                <Header>Experience</Header>
                <FormContainer>
                    <ExperienceForm>
                        <label>Company Name</label>
                        <FormInput
                            type="text"
                            value={work.company}
                            name="company"
                            onChange={handleChange}
                        />
                        <label>Role / Title</label>
                        <FormInput
                            type="text"
                            value={work.position}
                            name="position"
                            onChange={handleChange}
                        />
                        <label>Location</label>
                        <FormInput
                            type="text"
                            value={work.location}
                            name="location"
                            onChange={handleChange}
                        />
                        <label>Start Date</label>
                        <FormInput
                            type="text"
                            value={work.startDate}
                            name="startDate"
                            onChange={handleChange}
                        />
                        <label>End Date</label>
                        <FormInput
                            type="text"
                            name="endDate"
                            value={work.endDate}
                            onChange={handleChange}
                        />
                        <label>Duties</label>
                        <FormInput />
                    </ExperienceForm>
                </FormContainer>
            </ExperienceContainer>
        );
    });
};

export default ExperienceSection;
