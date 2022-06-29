// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const handleFirstNameChange = (event) => {
    setValues({...values, firstName: event.target.value});
  }
  const handleLastNameChange = (event) => {
    setValues({...values, lastName: event.target.value});
  }
  const handleEmailChange = (event) => {
    setValues({...values, email: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div className="App App-header">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <form onSubmit={handleSubmit}>
      <div className="form-control w-full max-w-xs">
      {submitted && valid ? <div className="alert alert-success shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Your submission has been confirmed!</span>
        </div>
      </div> : null}
        <label className="label">
          <span className="label-text">What is your first name?</span>
        </label>
        <input onChange={handleFirstNameChange} value={values.firstName} type="text" placeholder="First name" className="input input-bordered w-full max-w-xs" />
        <label className="label">
          {submitted && !values.firstName ? <span className="label-text-alt text-red-600">Please enter your First Name</span> : null}
        </label>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">What is your last name?</span>
        </label>
        <input onChange={handleLastNameChange} value={values.lastName} type="text" placeholder="Last name" className="input input-bordered w-full max-w-xs" />
        <label className="label">
        {submitted && !values.lastName ? <span className="label-text-alt text-red-600">Please enter your Last Name</span> : null}
        </label>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">What is your email?</span>
        </label>
        <input onChange={handleEmailChange} value={values.email} type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
        <label className="label">
        {submitted && !values.email ? <span className="label-text-alt text-red-600">Please enter your Email</span> : null}
        </label>
      </div>
      <button className="btn btn-success">Success</button>
      </form>
    </div>
  );
}

export default App;