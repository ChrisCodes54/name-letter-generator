import React, { useState } from "react";
import "./style.css";

export default function NameInputForm() {
  const [name, setName] = useState("");
  const nameRegex = /^[a-zA-Z\s]+$/;
  const [randomLetter, startLetter] = useState("");

  const handleClick = () => {
    const trimmedName = name.trim();
    const validity = nameRegex.test(name);

    if (trimmedName.length > 0 && validity) {
      const randomIndex = Math.floor(Math.random() * trimmedName.length);
      const newLetter = trimmedName.charAt(randomIndex);
      startLetter(newLetter);
    } else {
      startLetter("");
      alert("please type a name without any special characters");
    }
  };
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
    <div className="input-container border border-3 border-danger rounded p-3 ">
    { randomLetter && (
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
        <button type="button" className="btn btn-danger" onClick={handleClick}>
          Submit
        </button>
      </div>
      
    </div>
    </>
  );
}
