import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from '../pages/Resume/ResumeSlice';

export const store = configureStore({
  reducer: {
      resume: resumeReducer,
  },
});
