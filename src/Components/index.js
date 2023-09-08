import React from 'react';
import './style.css'

export default function NameInputForm() {
  return (
    <div className='real-container '>

        <div className='container'>

            <div className='text-container'>Enter your name below!</div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <button type="button" class="btn btn-danger">Primary</button>

        </div>
        </div>
  )
}
