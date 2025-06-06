import UserInfoForm from './components/UserInfoForm/UserInfoForm'
import './App.css'
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submittedInfo, setSubmittedInfo] = useState(null);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateName = (name) => {
    // Name should be at least 2 characters and contain only letters and spaces
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    // Standard email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password should be at least 8 characters and contain at least one uppercase, one lowercase, one number and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!value) {
      setEmailError('');
    } else if (!validateEmail(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  }

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!value) {
      setPasswordError('');
    } else if (!validatePassword(value)) {
      setPasswordError('Password must be at least 8 characters and contain uppercase, lowercase, number and special character');
    } else {
      setPasswordError('');
    }
  }

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (!value) {
      setNameError('');
    } else if (!validateName(value)) {
      setNameError('Name should be at least 2 characters and contain only letters and spaces');
    } else {
      setNameError('');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate name
    if (!validateName(name)) {
      setNameError('Name should be at least 2 characters and contain only letters and spaces');
      isValid = false;
    }

    // Validate email
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }

    // Validate password
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters and contain uppercase, lowercase, number and special character');
      isValid = false;
    }

    if (isValid) {
      setSubmittedInfo({
        name,
        email,
        password
      });
      // Reset form
      setName('');
      setEmail('');
      setPassword('');
    }
  }

  return (
    <div>
      <h1>Form Demo</h1>

      <form className='form-container' onSubmit={handleSubmit}>
        <UserInfoForm 
          label="Name" 
          type="text" 
          handleChange={handleNameChange} 
          error={nameError}
          value={name}
        />
        <UserInfoForm 
          label="Email" 
          type="email" 
          handleChange={handleEmailChange} 
          error={emailError}
          value={email}
        />
        <UserInfoForm 
          label="Password" 
          type="password" 
          handleChange={handlePasswordChange} 
          error={passwordError}
          value={password}
        />

        <button type='submit'>Submit</button>
      </form>

      {submittedInfo && (
        <div className="submitted-info">
          <h2>Submitted Information:</h2>
          <p><strong>Name:</strong> {submittedInfo.name}</p>
          <p><strong>Email:</strong> {submittedInfo.email}</p>
          <p><strong>Password:</strong> {'*'.repeat(submittedInfo.password.length)}</p>
        </div>
      )}
    </div>
  )
}

export default App
