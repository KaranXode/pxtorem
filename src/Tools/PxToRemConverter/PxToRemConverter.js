import React, { useState ,useEffect} from "react";
import './PxToRemConverter.css'


const PxToRemConverter = () => {
  const [pxValue, setPxValue] = useState();
  const [remValue, setRemValue] = useState();
  const [baseFontSize, setBaseFontSize] = useState(16);

  const handlePxChange = (event) => {
    const inputValue =Math.max(0, event.target.value);
    setPxValue(inputValue);
    convertPxToRem(inputValue);
  };

  const handleRemChange = (event) => {
    const inputValue =Math.max(0, event.target.value);
    setRemValue(inputValue);
    convertRemToPx(inputValue);
  };

  const handleBaseChange = (event) => {
    const inputValue =Math.max(0, event.target.value);
    setBaseFontSize(inputValue);
    convertPxToRem(pxValue, inputValue);
  };

  const convertPxToRem = (value, base = baseFontSize) => {
    const rem = value / base;
    setRemValue(rem.toFixed(4));
  };

  const convertRemToPx = (value, base = baseFontSize) => {
    const px = value * base;
    setPxValue(px.toFixed(2));
  };

  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Responsive Typography Converter", "Font Size Converter", "Pixel to REM Converter"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(interval);
  }, []);
  

  return (
    <div className="container px-container">
      <div>
      <div className="mb-5">
        <h1 className="text-center">Pixel to Rem Converter</h1>
        <p className="text-center">{titles[titleIndex]}</p>
      </div>
      <div className="d-flex gap-5">
        <div className="d-flex flex-column">
          <label className="form-label">Pixels </label>
          <input type="number" value={pxValue} onChange={handlePxChange} placeholder="1" className="form-control form-px-control"/>
        </div>
        <div className="d-flex flex-column">
          <label  className="form-label">REM</label>
          <input type="number" value={remValue} onChange={handleRemChange} className="form-control form-px-control" />
        </div>

      
      </div>
      <div className="mt-5 text-center small">
          <label className="form-label me-3">To Change Base Font Size :</label>
          <input
            type="number"
            value={baseFontSize}
            onChange={handleBaseChange}
            className="baseValue me-3"
          />Pixels
        </div>
    </div>
    </div>
  );
};

export default PxToRemConverter;
