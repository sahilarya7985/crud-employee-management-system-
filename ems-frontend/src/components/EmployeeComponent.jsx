import React, { useEffect, useState } from 'react';
import { getEmployee, createEmployee, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeFormComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const { id } = useParams();  // Get the employee ID from the route parameters
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          const employee = response.data;
          setFirstName(employee.firstName);
          setLastName(employee.lastName);
          setEmail(employee.email);
        })
        .catch((error) => {
          console.error("There was an error fetching the employee data!", error);
        });
    }
  }, [id]);

  const validateForm = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = "First Name is required";
    if (!lastName) newErrors.lastName = "Last Name is required";
    if (!email) newErrors.email = "Email is required";
    return newErrors;
  };

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const employee = { firstName, lastName, email };

    if (id) {
      updateEmployee(id, employee)
        .then(() => navigate('/employees'))
        .catch((error) => console.error("There was an error updating the employee!", error));
    } else {
      createEmployee(employee) // Assuming you have a createEmployee service method for creating a new employee
        .then(() => navigate('/employees'))
        .catch((error) => console.error("There was an error saving the employee!", error));
    }
  };

  return (
    <div className='container'>
      <br /> <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>{id ? "Update Employee" : "Add Employee"}</h2>
          <div className='card-body'>
            <form onSubmit={saveOrUpdateEmployee}>
              <div className='form-group mb-2'>
                <label className='form-label'>First Name:</label>
                <input
                  type='text'
                  placeholder='Enter Employee First Name'
                  name='firstName'
                  value={firstName}
                  className='form-control'
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Last Name:</label>
                <input
                  type='text'
                  placeholder='Enter Employee Last Name'
                  name='lastName'
                  value={lastName}
                  className='form-control'
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Email:</label>
                <input
                  type='email'
                  placeholder='Enter Employee Email'
                  name='email'
                  value={email}
                  className='form-control'
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>
              <button className='btn btn-success' type='submit'>
                {id ? "Update" : "Save"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeFormComponent;
