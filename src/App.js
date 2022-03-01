import React from "react";
// TODO: import useFormik from formik library
import { useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''      
    },
    onSubmit: values =>{
      alert("Login Successful");
    },
    validate: values =>{
      let errors = {};
      // Validate email address using JavaScript regular expression
      if(!values.email) 
          errors.email = 'Field Required';
       else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Username should be an email';
    }

      if(!values.password) 
          errors.password = 'Field Required';
      return errors;
    }
  });
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input 
              name="email"
              id="emailField" 
              type="email" 
              onChange={formik.handleChange} 
              value={formik.values.email}/>
              {formik.errors.email ? (
              <div style={{color:'red'}}>
                  {formik.errors.email}</div>
              )
                : null}
        <div>Password:</div>
        <input 
              name="password"
              id="pswField"
              type="text"  
              onChange={formik.handleChange} 
              value={formik.values.password}/><br/>
              {formik.errors.password ? (
              <div style={{color:'red'}}>
                {formik.errors.password}</div>
              ) 
                :null}        
        <button type="submit">Submit</button>
      </form>      
    </div>
  );
}

export default App;
