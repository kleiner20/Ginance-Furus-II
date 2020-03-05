import React from 'react';
import './App.css';

import { Button, Form, FormGroup, Label, Input }
  from 'reactstrap';

import { FacebookLoginButton } from 'react-social-login-buttons';

function App() {
  return (
    <div className="body">
           <h1>
Ginance Furu
       </h1>
    <Form className="login-form">

       <FormGroup>
         <input type="email" placeholder="Email"/>
        </FormGroup> 
        <FormGroup>
         <input type="password" placeholder="Password"/>
        </FormGroup>
        <Button className="btn btn-primary-outline">
          Log in
        </Button>
        <div className="text-center pt-3">
          Or continue with your social media account
        </div>
        <FacebookLoginButton className="mt-3 mb-3"/>
        <div className="text-center">
          <a href="/sign-up">Sign up</a>
          <span className="p-2">|</span>
          <a href="/forgot-password">Forgot Password</a>
        </div>
    </Form>
    </div>
  );
}

export default App;
