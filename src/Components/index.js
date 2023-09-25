import React from 'react';
import './style.css'


export default function NameInputForm() {
	const handleClick = () => {

	}
	
  return (
    <div className="input-container border border-3 border-danger rounded p-3 ">
			<div className="mb-3 d-flex justify-content-center">Enter your name below!</div>
			<div class="input-group mb-3">
				<input type="text" className="form-control text-center" placeholder="Name" id='name-input' onClick={()=> handleClick}  />
			</div>
			<div className='d-flex justify-content-center'>
			<button type="button" className="btn btn-danger">
				Submit
			</button>
		</div>
		</div>
  )
}
