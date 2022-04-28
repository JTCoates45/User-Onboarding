import React, {useState} from 'react'
import './App.css';
import Form from './Component/Form.js'


const initalValues = {
  username:'',
  password:'',
  email: '',
  ToS: false
}




function App() {
  const[formValues, setFormValues] = useState(initalValues);

const onSubmit = () => {

}

const onChange = (name, value) => {
  setFormValues({...formValues, [name]: value});
}

  return (
    <div className="App">
      <Form values={formValues} change={onChange}/>
    </div>
  );
}

export default App;
