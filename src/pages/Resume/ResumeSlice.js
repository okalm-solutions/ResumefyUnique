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
            },
            {
                company1: '',
                location1: '',
                position1: '',
                website1: '',
                startDate1: '',
                endDate1: '',
                highlights1: ['']
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
            state.values.work[action.payload.name] = action.payload.value;
        }
    }
});

export const { forward, backward, setProfile, setWork } = resumeSlice.actions;

export default resumeSlice.reducer;
