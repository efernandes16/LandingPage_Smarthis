import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import {Container, Typography} from '@material-ui/core';
import 'fontsource-roboto';

function App() {
  return (
    <Container component='article' maxWidth='sm'>
   <Typography 
   variant='h4' 
   component='h1'
   align='center'>Cadastre-se</Typography>
   <RegistrationForm onSubmit={onSubmitForm} validateEmail={validateEmail}/>
   </Container>

  );
}

function onSubmitForm(data) {
  console.log(data);
}

function validateEmail(email){

  if (!email.includes('@')){
    return {valido:false, text:'Insira email válido'} 
  } else {
    return {valido:true, text:''} 
  }
}

export default App;
