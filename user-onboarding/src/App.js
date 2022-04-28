import React, {useState} from 'react';
import './App.css';
import Form from './Component/Form.js';
import schema from '../src/Component/Validation/formSchema';
import * as yup from 'yup';
import axios from 'axios'

const initalValues = {
  username:'',
  password:'',
  email: '',
  ToS: false
}

const initalErrors = {
  username:'',
  password:'',
  email: '',
  ToS: ''
}

function App() {
  const[formValues, setFormValues] = useState(initalValues);
  const[formErrors, setFormErrors] = useState(initalErrors);
  const[users, setUsers] = useState([]);

const onSubmit = () => {
  axios.post('https://reqres.in/api/users', formValues)
  .then (res => {
    setUsers([res.data, ...users])
    // console.log(res.data)
  })
  .catch(err => console.error(err))
}

const validate=(name,value) => {
  yup.reach(schema, name)
  .validate(value)
  .then(() => setFormErrors({...formErrors, [name]: ''}))
  .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
}

const onChange = (name, value) => {
  validate(name, value);
  setFormValues({...formValues, [name]: value});
}

  return (
    <div className="App">
      <Form values={formValues} change={onChange} errors={formErrors} submit={onSubmit}/>
        {users.map(user => (
          <div key={user.id}> 
          <p>{user.email}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
