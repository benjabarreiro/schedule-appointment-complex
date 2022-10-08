import "./App.css";
import Calendar from "./components/Calendar";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { captureData } from "./redux/form";
import { useState } from "react";
import { clearAll } from "./redux/calendar";

function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  return (
    <div className="App">
      <Button onClick={() => dispatch(clearAll())}>Clear all</Button>
      <Calendar />
      <Form.Control value={data} onChange={(e) => setData(e.target.value)} />
      <Button
        onClick={() => {
          dispatch(captureData({ value: data }));
          setData("");
        }}
      >
        Save data
      </Button>
    </div>
  );
}

export default App;
