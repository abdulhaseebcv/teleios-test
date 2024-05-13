import React, { useState } from 'react';
import { Checkbox, CheckboxLabel, CheckboxSection, FormSection, Input, InputLabel, InputSection, SubmitButton, TextField, Wrapper } from './FormStyle';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [watchParties, setWatchParties] = useState(false);
  const [privateEvents, setPrivateEvents] = useState(false);
  const [newRaceModes, setNewRaceModes] = useState(false);
  const [familyFun, setFamilyFun] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    if (!name) {
      errors.name = 'Name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    }

    if (!watchParties && !privateEvents && !newRaceModes && !familyFun) {
      errors.checkbox = 'At least one checkbox must be checked';
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
    } else {

      setError({});

      const interests = [];

      if (watchParties) interests.push('watchParties');
      if (privateEvents) interests.push('privateEvents');
      if (newRaceModes) interests.push('newRaceModes');
      if (familyFun) interests.push('familyFun');

      axios.post('http://localhost:5000/submit-form', {
        name,
        email,
        interests
      })
        .then(response => {
          toast.success(response.data.message);
        })
        .catch(error => {
          console.error('Error:', error);
          toast.error('Error submitting form. Please try again later');
        });

    }
  };

  const handleCheckboxChange = (checkboxName, setValue) => {
    return (e) => {
      setValue(e.target.checked);
      setError({ ...error, checkbox: '' });
    };
  };

  return (
    <FormSection>
      <Wrapper>
        <h3>Be the first to know.</h3>
        <p className='centered'>Early access to bookings, exciting F1 events, Grand Prix watch parties, and new releases.</p>
        <p>Your details *</p>
        <form onSubmit={handleSubmit}>
          <TextField>
            <InputSection>
              <InputLabel>Name *</InputLabel>
              <Input type="text" placeholder='Enter your name' value={name} onChange={(e) => {
                setName(e.target.value);
                setError({ ...error, name: '' });
              }} />
              {error && error.name && <span>{error.name}</span>}
            </InputSection>
            <InputSection>
              <InputLabel>Email address *</InputLabel>
              <Input type="email" placeholder='Enter your email address' value={email} onChange={(e) => {
                setEmail(e.target.value);
                setError({ ...error, email: '' });
              }} />
              {error && error.email && <span>{error.email}</span>}
            </InputSection>
          </TextField>
          <p>What are you interested in?</p>
          <CheckboxSection>
            <CheckboxLabel htmlFor="watchParties">
              <Checkbox type="checkbox" id="watchParties" name="watchParties" checked={watchParties} onChange={handleCheckboxChange('watchParties', setWatchParties)} />
              Watch Parties
            </CheckboxLabel>

            <CheckboxLabel htmlFor="privateEvents">
              <Checkbox type="checkbox" id="privateEvents" name="privateEvents" checked={privateEvents} onChange={handleCheckboxChange('privateEvents', setPrivateEvents)} />
              Private Events
            </CheckboxLabel>

            <CheckboxLabel htmlFor="newRaceModes">
              <Checkbox type="checkbox" id="newRaceModes" name="newRaceModes" checked={newRaceModes} onChange={handleCheckboxChange('newRaceModes', setNewRaceModes)} />
              New Race Modes
            </CheckboxLabel>

            <CheckboxLabel htmlFor="familyFun">
              <Checkbox type="checkbox" id="familyFun" name="familyFun" checked={familyFun} onChange={handleCheckboxChange('familyFun', setFamilyFun)} />
              Family Fun
            </CheckboxLabel>

          </CheckboxSection>
          {error && error.checkbox && <span>{error.checkbox}</span>}
          <SubmitButton type='submit'>I'm In</SubmitButton>
        </form>
      </Wrapper>
      <ToastContainer />
    </FormSection>
  );
};

export default Form;
