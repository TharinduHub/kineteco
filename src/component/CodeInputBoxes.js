import { useState, useRef, useEffect } from 'react';

const CodeInputBoxes = ({ length, onChange, onComplete }) => {
  const [values, setValues] = useState(Array(length).fill(''));
  const inputRefs = useRef([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const allFilled = values.every((value) => value !== '');
    if (allFilled && !isComplete) {
      setIsComplete(true);
      onComplete(values.join(''));
    } else if (!allFilled && isComplete) {
      setIsComplete(false);
    }
  }, [values, isComplete, onComplete]);

  const handleChange = (e, index) => {
    const newValues = [...values];
    newValues[index] = e.target.value;
    setValues(newValues);

    if (e.target.value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    onChange(newValues.join(''));
  };

  return (
    <div className="codeInputContainer">
      {values.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={value}
          onChange={(e) => handleChange(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
          className="codeInputBox"
        />
      ))}
    </div>
  );
};

export default CodeInputBoxes;
