import React, {useState} from 'react';
import {Button, FormControlLabel, Switch, TextField} from '@material-ui/core';


const RegistrationForm = ()=>{
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [novidades, setNovidades] = useState(true);

    return (
        <form 
            onSubmit={(event)=>{
                event.preventDefault();
                console.log(nome, email, empresa);
            }}
        >
            <TextField 
                value={nome}
                onChange={(event)=>{
                    setNome(event.target.value);    
                }}
                id="nome" 
                label="Nome" 
                color="primary" 
                variant="outlined" 
                margin='normal' 
                fullWidth
            />
            <TextField 
                value={email}
                onChange={(event)=>{
                    setEmail(event.target.value);
                }}
                id="email" 
                label="Email" 
                color="primary" 
                variant="outlined" 
                margin='normal' 
                fullWidth
            />
            <TextField 
                value={empresa}
                onChange={(event)=>{
                    setEmpresa(event.target.value);
                }}
                id="empresa"
                label="Empresa" 
                color="primary" 
                variant="outlined" 
                margin='normal' 
                fullWidth
            />
            <FormControlLabel 
                label = "Novidades" 
                control={<Switch onChange={(event)=>{
                    setNovidades(event.target.checked)
                }} name="novidades" defaultChecked={novidades} color="defaut"/>}
            />
            <Button type= "submit" variant="contained" color="defaut">
                Enviar
            </Button>
            
        </form>
    );
}

export default RegistrationForm;