import React, { useState } from "react";
import "./style.css";

export default function NameInputForm() {
  const [name, setName] = useState("");
  const [randomLetter, setRandomLetter] = useState("");
  const nameRegex = /^[a-zA-Z\s]+$/;

  const handleClick = () => {
    const trimmedName = name.trim();
    const validity = nameRegex.test(name);

    if (trimmedName.length > 0 && validity) {
      const randomIndex = Math.floor(Math.random() * trimmedName.length);
      const newLetter = trimmedName.charAt(randomIndex);
      setRandomLetter(newLetter);
    } else {
      setRandomLetter("");
    }
  };
  const handleInputChange = (event) => {
    const inputValue = event.target.value.replace(/[^a-zA-Z\s]+/g, "")
    setName(inputValue);
  };

  
  
  return (
    <>
      <div className="input-container border border-3 border-danger rounded p-3 ">
        {randomLetter && (
          <div className="mb-3 d-flex justify-content-center">
            Random Letter: {randomLetter}
          </div>
        )}
        <div className="mb-3 d-flex justify-content-center">
          Enter your name below!
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control text-center"
            placeholder="Name"
            id="name-input"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
