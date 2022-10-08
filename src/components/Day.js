import React from "react";
import { Card } from "react-bootstrap";
import Hour from "./Hour";

export default function Day({ title, values }) {
  return (
    <Card>
      <h3>{title}</h3>
      {values.map((hour) => (
        <Hour key={hour.hour} day={title} {...hour} />
      ))}
    </Card>
  );
}
