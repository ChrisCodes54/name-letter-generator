import React, { useState } from "react";
import "./style.css";

export default function NameInputForm() {
  const [name, setName] = useState("");
  const [randomLetter, setRandomLetter] = useState("");
  
  const handleClick = () => {
    const trimmedName = name.trim();
    const nameRegex = /^[a-zA-Z\s]+$/;
    const validity = nameRegex.test(name);
    
    if (trimmedName.length > 0 && validity) {
      let newLetter = '';
      while (newLetter === '' || newLetter === ' '){
        newLetter = getRandomLetter(trimmedName)
      } setRandomLetter(newLetter)
    }
  };

  const getRandomLetter = (name) => {
    const randomIndex = Math.floor(Math.random() * name.length);
    return name.charAt(randomIndex)
  }
  const handleInputChange = (event) => {
    const inputValue = event.target.value
    setName(inputValue);
  };

  const handleInput = (event) => {
    if(!event.key.match(/[a-zA-Z\s]/)) {
      event.preventDefault();
    }
  }

  
  
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
            onChange={handleInputChange}
            onKeyDown={handleInput}
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