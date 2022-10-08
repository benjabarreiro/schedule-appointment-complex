import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAppointment } from "../redux/calendar";
import { resetData } from "../redux/form";

export default function Hour({ hour, appointment, day }) {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  console.log(formData);
  return (
    <div>
      <h5
        onClick={() => {
          dispatch(createAppointment({ hour, day, appointment: formData }));
          dispatch(resetData());
        }}
      >
        {hour} --- {appointment}
      </h5>
    </div>
  );
}
