import React, {useState} from 'react'

const Slider = ({title, max, multiplier, type}) => {
    
  const [value, setValue] = useState(0)
  const [consumeValue, setConsumeValue] = useState(0)

  const handleChangeValue = (e) => {
    setValue(e.target.value);
    setConsumeValue(e.target.value)
  }

  return (
    <>
      <div className="slider_container">
        <p>{title} - {value} {type}</p>
        <input type="range" min="0" max={max} onChange={handleChangeValue} name="" id=""/>
        <p>El consumo es: {value * multiplier}MB</p>
      </div>
    </>
  );
}

export default Slider
