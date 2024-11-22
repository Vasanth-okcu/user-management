import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';

const AddUser = ({ addUser }) => {
  const navigate = useNavigate();

  const initialValues = { name: '', email: '' };

  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = 'Required';
    if (!values.email) errors.email = 'Required';
    return errors;
  };

  const handleSubmit = (values) => {
    addUser(values);  
    navigate('/user-list');  
  };

  return (
    <div className="container">
      <h2>Add User</h2>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <button type="submit">Add User</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddUser;
