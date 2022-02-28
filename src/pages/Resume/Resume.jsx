import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ExperienceSection from "../../components/Experience/ExperienceSection";
import ProfileSection from "../../components/Profile/ProfileSection";
import {
    BackButton,
    NextButton,
    ButtonContainer,
    ResumeContainer
} from "./Resume.styles";
import { forward, backward, setProfile, setWork } from "./ResumeSlice";
import Amplify, { API } from "aws-amplify";
import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);

export function Resume() {
    const dispatch = useDispatch();
    const step = useSelector((state) => state.resume.step);
    const values = useSelector((state) => state.resume.values);

    const handleChahnge = (e) => {
        // e.preventDefault();
        dispatch(setProfile(e.target));
    };
    const data = {
        profile: {
            name: "Peter"
        }
    };
    const handleSubmit = async (e) => {
        const myInit = {
            body: values
        };
        await API.post("resumefyuniqueapi", "/resume/fetch-pdf", myInit)
            .then((response) => {
                window.prompt(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    switch (step) {
        case 1:
            return (
                <ResumeContainer>
                    <ProfileSection
                        values={values.profile}
                        handleChange={handleChahnge}
                    />
                    <ButtonContainer>
                        <NextButton onClick={handleSubmit}>Submit</NextButton>
                    </ButtonContainer>
                </ResumeContainer>
            );
        case 2:
            return (
                <ResumeContainer>
                    <h2 style={{ lineHeight: "70vh", textAlign: "center" }}>
                        Hello 2{" "}
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
                    <h2 style={{ lineHeight: "70vh", textAlign: "center" }}>
                        Hello 4
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
                    </ButtonContainer>
                </ResumeContainer>
            );
        default:
    }
}
