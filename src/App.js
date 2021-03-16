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
   <RegistrationForm/>
   </Container>

  );
}

export default App;
