import { useState } from "react";
import "./App.css";
import UploadImg from "./components/deletelater/uploadImg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <UploadImg />
    </div>
  );
}

export default App;
