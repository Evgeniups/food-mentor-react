import {createSlice, current} from '@reduxjs/toolkit';

const TOTAL_STEPS = 4;

const userSlice = createSlice({
  name: 'app',
  initialState: {
    data: {},
    currentStep: 1,
    isValid: false,
    isFinish: false,
  },
  reducers: {
    nextStep(state, action) {
      if (action.payload) {
        state.data = {...state.data, [action.payload.step]: action.payload.data};
        state.currentStep < TOTAL_STEPS ? ++state.currentStep : (state.isFinish = true);
      } else {
        console.log('Empty value');
      }
    },

    prevStep(state, action) {
      state.currentStep = --state.currentStep;
    },
  },
});

export const {nextStep, prevStep} = userSlice.actions;

export default userSlice.reducer;
