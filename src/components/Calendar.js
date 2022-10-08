import React from "react";
import { useSelector } from "react-redux";
import Day from "./Day";

export default function Calendar() {
  const calendar = useSelector((state) => state.calendar);
  return (
    <div className="calendar">
      {calendar && calendar.map((day) => (
        <Day key={day.day} title={day.day} values={day.values} />
      ))}
    </div>
  );
}
