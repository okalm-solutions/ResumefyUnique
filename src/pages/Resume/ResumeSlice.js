import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = {
    step: 2,
    // Personal Profile Details...
    values: {
        selectedTemplate: 1,
        headings: {
            work: "",
            education: "",
            skills: "",
            projects: "",
            awards: ""
        },
        profile: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            website: "",
            location: {
                address: ""
            },
            summaries: [""]
        },
        education: [
            {
                institution: "",
                location: "",
                area: "",
                studyType: "",
                startDate: "",
                endDate: "",
                gpa: ""
            }
        ],
        work: [
            {
                company: "Facebook",
                location: "",
                position: "",
                website: "",
                startDate: "",
                endDate: "",
                highlights: [""]
            },
            {
                company: "Facebook",
                location: "",
                position: "",
                website: "",
                startDate: "",
                endDate: "",
                highlights: [""]
            }
        ],
        skills: [
            {
                name: "",
                level: "",
                keywords: [""]
            }
        ],
        projects: [
            {
                name: "",
                description: "",
                url: "",
                keywords: [""]
            }
        ],
        awards: [
            {
                title: "",
                date: "",
                awarder: "",
                summary: ""
            }
        ]
    }
};

export const resumeSlice = createSlice({
    name: "resume",
    initialState,
    reducers: {
        forward: (state) => {
            state.step += 1;
        },
        backward: (state) => {
            state.step -= 1;
        },
        setProfile: (state, action) => {
            state.values.profile[action.payload.name] = action.payload.value;
        },
        setWork: (state, action) => {
            const index = state.values.work.length - 1;
            const { name, value } = action.payload;

            return produce(state, (draft) => {
                draft.values.work[index] = {
                    ...draft.values.work[index],
                    [name]: value
                };
            });
        },
        setEducation: (state, action) => {
            const index = state.values.education.length - 1;
            const { name, value } = action.payload;

            return produce(state, (draft) => {
                draft.values.education[index] = {
                    ...draft.values.education[index],
                    [name]: value
                };
            });
        },
        setProjects: (state, action) => {
            const index = state.values.projects.length - 1;
            const { name, value } = action.payload;

            return produce(state, (draft) => {
                draft.values.projects[index] = {
                    ...draft.values.projects[index],
                    [name]: value
                };
            });
        },
        setSkills: (state, action) => {
            const index = state.values.skills.length - 1;
            const { name, value } = action.payload;

            return produce(state, (draft) => {
                draft.values.skills[index] = {
                    ...draft.values.skills[index],
                    [name]: value
                };
            });
        },
        setAwards: (state, action) => {
            const index = state.values.awards.length - 1;
            const { name, value } = action.payload;

            return produce(state, (draft) => {
                draft.values.awards[index] = {
                    ...draft.values.awards[index],
                    [name]: value
                };
            });
        }
    }
});

export const { forward, backward, setProfile, setWork } = resumeSlice.actions;

export default resumeSlice.reducer;
