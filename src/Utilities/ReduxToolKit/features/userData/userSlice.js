import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name:'',
    packageRemainingDays: '',
    certificate:'',
    userId:'',
    flightHour:'',
    flightCount:'',
    coachingHours:'',
  };


  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      updateName: (state, action) => {
        state.name = action.payload;
      },
      updatePackageRemainingsDays: (state, action) => {
        state.packageRemainingDays = action.payload;
      },
      updateCertificate: (state, action) => {
        state.certificate = action.payload;
      },
      updateUserId: (state, action) => {
        state.userId = action.payload;
      },
      updateFlightHour: (state, action) => {
        state.flightHour = action.payload;
      },
      updateFlightCount: (state, action) => {
        state.flightCount = action.payload;
      },
      updateCouchingHours: (state, action) => {
        state.coachingHours = action.payload;
      },
    },
  });


export const { updateCertificate,updateCouchingHours, updateFlightCount, updateFlightHour, updateName, updatePackageRemainingsDays, updateUserId } = userSlice.actions;
export default userSlice.reducer;
export const selectUser = (store) =>store.user;