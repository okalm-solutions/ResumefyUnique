import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ExperienceSection from "../../components/Experience/ExperienceSection";
import ProfileSection from "../../components/Profile/ProfileSection";
import EducationSection from "../../components/Education/Education";
import Projects from "../../components/Projects/Projects";
import Amplify, { API } from "aws-amplify";
import {
    BackButton,
    NextButton,
    ButtonContainer,
    ResumeContainer,
    EducationButtonContainer
} from "./Resume.styles";
import {
    forward,
    backward,
    setProfile,
    setWork,
    addEducation,
    removeEducation
} from "./ResumeSlice";
import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);

export function Resume() {
    const dispatch = useDispatch();
    const step = useSelector((state) => state.resume.step);
    const values = useSelector((state) => state.resume.values);

    const handleChange = (e) => {
        // e.preventDefault();
        dispatch(setProfile(e.target));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiName = "resumefyuniqueapi";
        const path = "/resume/fetch-pdf";
        const myInit = {
            body: values
        };

        await API.post(apiName, path, myInit)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    switch (step) {
        case 1:
            return (
                <ResumeContainer>
                    <ProfileSection
                        values={values.profile}
                        handleChange={handleChange}
                    />
                    <ButtonContainer>
                        <NextButton onClick={() => dispatch(forward())}>
                            Next
                        </NextButton>
                    </ButtonContainer>
                </ResumeContainer>
            );
        case 2:
            return (
                <ResumeContainer>
                    <EducationSection
                        values={values.education}
                        handleChange={handleChange}
                    />
                    <EducationButtonContainer>
                        <button
                            onClick={() => {
                                dispatch(addEducation());
                            }}>
                            Add Education
                        </button>
                        <button
                            onClick={() => {
                                dispatch(removeEducation());
                            }}>
                            Remove Education
                        </button>
                    </EducationButtonContainer>
                    <ButtonContainer>
                        <BackButton onClick={() => dispatch(backward())}>
                            Back
                        </BackButton>
                        <NextButton onClick={() => dispatch(forward())}>
                            Next
                        </NextButton>
                    </ButtonContainer>
                </ResumeContainer>
            );
        case 3:
            return (
                <ResumeContainer>
                    <ExperienceSection values={values.work} setWork={setWork} />
                    <ButtonContainer>
                        <BackButton onClick={() => dispatch(backward())}>
                            Back
                        </BackButton>
                        <NextButton onClick={() => dispatch(forward())}>
                            Next
                        </NextButton>
                    </ButtonContainer>
                </ResumeContainer>
            );
        case 4:
            return (
                <ResumeContainer>
                    <Projects />
                    <ButtonContainer>
                        <BackButton onClick={() => dispatch(backward())}>
                            Back
                        </BackButton>
                        <NextButton onClick={() => dispatch(forward())}>
                            Next
                        </NextButton>
                    </ButtonContainer>
                </ResumeContainer>
            );
        case 5:
            return (
                <ResumeContainer>
                    <h2 style={{ lineHeight: "70vh", textAlign: "center" }}>
                        Hello 5
                    </h2>
                    <ButtonContainer>
                        <BackButton onClick={() => dispatch(backward())}>
                            Back
                        </BackButton>
                        <NextButton onClick={() => dispatch(forward())}>
                            Next
                        </NextButton>
                    </ButtonContainer>
                </ResumeContainer>
            );
        case 6:
            return (
                <ResumeContainer>
                    <h2 style={{ lineHeight: "70vh", textAlign: "center" }}>
                        Hello 6
                    </h2>
                    <ButtonContainer>
                        <BackButton onClick={() => dispatch(backward())}>
                            Back
                        </BackButton>
                        <NextButton onClick={handleSubmit}>Submit</NextButton>
                    </ButtonContainer>
                </ResumeContainer>
            );
        default:
    }
}
