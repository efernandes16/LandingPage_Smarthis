import React, { useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

const RegistrationForm = ({ onSubmit, validateEmail }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ email: { valido: true, text: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ nome, email, empresa, novidades });
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        color="primary"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        onBlur={(event) => {
          const ehValido = validateEmail(email);
          setErros({ email: ehValido });
        }}
        error={!erros.email.valido}
        helperText={erros.email.text}
        id="email"
        label="Email"
        color="primary"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={empresa}
        onChange={(event) => {
          setEmpresa(event.target.value);
        }}
        id="empresa"
        label="Empresa"
        color="primary"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            color="default"
          />
        }
      />
      <Button type="submit" variant="contained" color="default">
        Enviar
      </Button>
    </form>
  );
};

export default RegistrationForm;
