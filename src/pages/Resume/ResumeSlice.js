import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    step: 1,
    // Personal Profile Details...
    values: {
        selectedTemplate: 1,
        headings: {
            work: '',
            education: '',
            skills: '',
            projects: '',
            awards: ''
        },
        profile: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            website: '',
            location: {
                address: ''
            },
            summaries: ['']
        },
        education: [
            {
                institution: '',
                location: '',
                area: '',
                studyType: '',
                startDate: '',
                endDate: '',
                gpa: ''
            }
        ],
        work: [
            {
                company: '',
                location: '',
                position: '',
                website: '',
                startDate: '',
                endDate: '',
                highlights: ['']
            }
        ],
        skills: [
            {
                name: '',
                level: '',
                keywords: ['']
            }
        ],
        projects: [
            {
                name: '',
                description: '',
                url: '',
                keywords: ['']
            }
        ],
        awards: [
            {
                title: '',
                date: '',
                awarder: '',
                summary: ''
            }
        ]
    }
};

export const resumeSlice = createSlice({
    name: 'resume',
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
            state.values.work[0][action.payload.name] = action.payload.value;
        },
        setEducation: (state, action) => {
            const {value} = action.payload;
            state.values.education[0][action.payload.name] = value;
        },
        addEducation: (state) => {
            state.values.education.push({
                institution: '',
                location: '',
                area: '',
                studyType: '',
                startDate: '',
                endDate: '',
                gpa: ''
            });
        },
        removeEducation: (state, action) => {         
            state.values.education.splice(action.payload, 1);
        },
        setProjects: (state, action)=>{
            state.values.projects[0][action.payload.name] = action.payload.value;
        }
    }
});

export const { 
    forward, 
    backward, 
    setProfile, 
    setWork, 
    addEducation,
    removeEducation, 
    setEducation,
    setProjects
} = resumeSlice.actions;

export default resumeSlice.reducer;
