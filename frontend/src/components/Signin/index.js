import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FromWrap, Icon, Text, Img } from './SigninElements';
import logo from '../../images/logo.png';
import { useState, useEffect, useContext, useRef } from 'react';
import { useHistory } from 'react-router';
import { TokenContext } from '../../context/TokenContext';
import AuthContext from '../../context/AuthProvider';
import axios from 'axios';
import {SignInService} from '../../services/index';

//LIBRERIA BULMA
import { Form as BulmaForm, Button } from 'react-bulma-components';


  const { Field, Control, Label, Input } = BulmaForm

  const Index = ({ handleSubmit }) => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '', 
  })

  const handleChange = (e) => {
    const{name, value} = e.target
    //console.log(name, value);

    setFormValues({...formValues, [name]: value})
  }

  const _handleSubmit = (e) => {
    e.preventDefault()
    handleSubmit({...formValues})

    // console.log(formValues)
  
  }
  return (
    <form onSubmit={_handleSubmit}>
      <Field>
        <Label>Email</Label>
        <Control>
          <Input
            placeholder="Input"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </Control>
      </Field>

      <Field>
        <Label>Password</Label>
        <Control>
          <Input
            placeholder="Input"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </Control>
      </Field>

    <Button color="primary" type='submit'>Entrar</Button>
    </form>
  )



     
    
}

export default Index;