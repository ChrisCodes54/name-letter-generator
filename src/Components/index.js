import React, { useState } from 'react';
import './style.css'


export default function NameInputForm() {
	const[name, setName] = useState('')


	const handleClick = () => {
		console.log(name.charAt(Math.floor(Math.random() * name.length)))

	}
	const handleInputChange = (event) => {
		setName(event.target.value)
	}

	
	
  return (
    <div className="input-container border border-3 border-danger rounded p-3 ">
			<div className="mb-3 d-flex justify-content-center">Enter your name below!</div>
			<div className="input-group mb-3">
				<input type="text" className="form-control text-center" placeholder="Name" id='name-input' value={name} onChange={handleInputChange} />
			</div>
			<div className='d-flex justify-content-center'>
			<button type="button" className="btn btn-danger" onClick={handleClick} >
				Submit
			</button>
		</div>
		</div>
  )
}
