import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';

const BasicForm = (props) => {

  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName('');
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <h1>TODO</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values, {resetForm}) => {
          resetForm({values: ''})
        }}
      >
        <Form onSubmit={handleSubmit}>
          <label htmlFor="todo">Add ToDo </label>
          <Field id="todo" name="Add Todo" placeholder="TextHere" onChange={handleChange}/>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
};

export default BasicForm
