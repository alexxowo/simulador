import React, {useState} from 'react'

import './slider.css'

const Slider = ({title, max, multiplier, type, onChangeValue}) => {
    
  const [value, setValue] = useState(0)
  const [consumeValue, setConsumeValue] = useState(0)

  const handleChangeValue = (e) => { 
    setValue(e.target.value);
    let consume = Number((e.target.value * multiplier).toFixed(2));
    onChangeValue(consume);
    setConsumeValue(consume);
  }

  return (
    <>
      <div className="slider_container">
        <p>{title} - {value} {type} / {consumeValue}MB</p>
        <input type="range" min="0" max={max} value={value} onChange={handleChangeValue} name="" id=""/>
        <span></span>
      </div>
    </>
  );
}

export default Slider
