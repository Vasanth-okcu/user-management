import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';

const EditUser = ({ users, updateUser }) => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const foundUser = users.find((user) => user.id === parseInt(id));
    if (foundUser) {
      setUser(foundUser); 
    } else {
      navigate('/user-list'); 
    }
  }, [id, users, navigate]);

  if (!user) return <div>Loading...</div>;

  const initialValues = { name: user.name, email: user.email };

  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = 'Required';
    if (!values.email) errors.email = 'Required';
    return errors;
  };

  const handleSubmit = (values) => {
    updateUser(id, values); 
    navigate('/user-list'); 
  };

  return (
    <div className="container">
      <h2>Edit User</h2>
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
          <button type="submit">Update User</button>
        </Form>
      </Formik>
    </div>
  );
};

export default EditUser;
