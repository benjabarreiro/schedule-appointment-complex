import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    day: "Monday",
    values: [
      {
        hour: "8am",
        appointment: "",
      },
      {
        hour: "9am",
        appointment: "",
      },
      {
        hour: "10am",
        appointment: "",
      },
      {
        hour: "11am",
        appointment: "",
      },
      {
        hour: "12pm",
        appointment: "",
      },
      {
        hour: "1pm",
        appointment: "",
      },
      {
        hour: "2pm",
        appointment: "",
      },
      {
        hour: "3pm",
        appointment: "",
      },
      {
        hour: "4pm",
        appointment: "",
      },
      {
        hour: "5pm",
        appointment: "",
      },
    ],
  },
  {
    day: "Tuesday",
    values: [
      {
        hour: "8am",
        appointment: "",
      },
      {
        hour: "9am",
        appointment: "",
      },
      {
        hour: "10am",
        appointment: "",
      },
      {
        hour: "11am",
        appointment: "",
      },
      {
        hour: "12pm",
        appointment: "",
      },
      {
        hour: "1pm",
        appointment: "",
      },
      {
        hour: "2pm",
        appointment: "",
      },
      {
        hour: "3pm",
        appointment: "",
      },
      {
        hour: "4pm",
        appointment: "",
      },
      {
        hour: "5pm",
        appointment: "",
      },
    ],
  },
  {
    day: "Wednesday",
    values: [
      {
        hour: "8am",
        appointment: "",
      },
      {
        hour: "9am",
        appointment: "",
      },
      {
        hour: "10am",
        appointment: "",
      },
      {
        hour: "11am",
        appointment: "",
      },
      {
        hour: "12pm",
        appointment: "",
      },
      {
        hour: "1pm",
        appointment: "",
      },
      {
        hour: "2pm",
        appointment: "",
      },
      {
        hour: "3pm",
        appointment: "",
      },
      {
        hour: "4pm",
        appointment: "",
      },
      {
        hour: "5pm",
        appointment: "",
      },
    ],
  },
  {
    day: "Thursday",
    values: [
      {
        hour: "8am",
        appointment: "",
      },
      {
        hour: "9am",
        appointment: "",
      },
      {
        hour: "10am",
        appointment: "",
      },
      {
        hour: "11am",
        appointment: "",
      },
      {
        hour: "12pm",
        appointment: "",
      },
      {
        hour: "1pm",
        appointment: "",
      },
      {
        hour: "2pm",
        appointment: "",
      },
      {
        hour: "3pm",
        appointment: "",
      },
      {
        hour: "4pm",
        appointment: "",
      },
      {
        hour: "5pm",
        appointment: "",
      },
    ],
  },
  {
    day: "Friday",
    values: [
      {
        hour: "8am",
        appointment: "",
      },
      {
        hour: "9am",
        appointment: "",
      },
      {
        hour: "10am",
        appointment: "",
      },
      {
        hour: "11am",
        appointment: "",
      },
      {
        hour: "12pm",
        appointment: "",
      },
      {
        hour: "1pm",
        appointment: "",
      },
      {
        hour: "2pm",
        appointment: "",
      },
      {
        hour: "3pm",
        appointment: "",
      },
      {
        hour: "4pm",
        appointment: "",
      },
      {
        hour: "5pm",
        appointment: "",
      },
    ],
  },
];

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: initialState,
  reducers: {
    createAppointment: (state, action) => {
      const newState = state.map((d) => {
        if (d.day === action.payload.day) {
          d.values.map((h) => {
            if (h.hour === action.payload.hour) {
              h.appointment = action.payload.appointment;
            }
          });
        }
      });
      state = newState;
    },
    clearAll: (state) => {
      console.log('reset all')
      return state = initialState;
    },
  },
});

export const {
  createAppointment,
  clearAll,
} = calendarSlice.actions;

export default calendarSlice.reducer;
