import React from 'react';
import './style.css'

export default function NameInputForm() {
  return (
    <div className="input-container border border-3 border-danger rounded p-3">
			<div className="mb-3">Enter your name below!</div>
			<div class="input-group mb-3">
				<input type="text" class="form-control" placeholder="Name" />
			</div>
			<button type="button" class="btn btn-danger">
				Primary
			</button>
		</div>
  )
}
