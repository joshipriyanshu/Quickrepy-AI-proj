import { useState } from "react";
import "./app.css"
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'





function App() {

  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const trackColor = `linear-gradient(to right,#0bb01b ${value}%, rgb(236, 229, 229) ${value}%)`;



  return (
    <div className="slider-container">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        className="slider"
        onChange={handleChange}
        style={{ background: trackColor }}
        data-tooltip-id = "tool"
        data-tooltip-content={` ${value} %`}
      />

      <Tooltip type="solid" place="top" id ="tool" />
    </div>
  );
} 
export default App;
