import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
}

export const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        forward: (state)=>{
            state.step += 1
        },
        backward:(state)=>{
            state.step -= 1
        }
    }
})

export const { forward, backward } = resumeSlice.actions

export default resumeSlice.reducer