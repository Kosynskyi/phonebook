import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  TextField,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Button from '@mui/joy/Button';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
// import Chip from '@mui/joy/Chip';
// import { createNewUser } from 'services/api';
import { registration } from 'redux/auth/authOperations';
import useLoading from 'services/hooks/useLoading';

const RegistrationPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const dispatch = useDispatch();
  const isLoading = useLoading();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'repeatPassword':
        setRepeatPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = { name, email, password };
    dispatch(registration(user));
    setName('');
    setEmail('');
    setPassword('');
    setRepeatPassword('');
  };

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleClickShowRepeatPassword = () =>
    setShowRepeatPassword(show => !show);
  const handleMouseDownRepeatPassword = event => {
    event.preventDefault();
  };

  return (
    <>
      <Box
        component="form"
        autoComplete="off"
        sx={{ display: 'flex', flexDirection: 'column', width: '25ch' }}
        onSubmit={handleSubmit}
      >
        <TextField
          sx={{
            paddingY: 0,
            marginBottom: 1,
          }}
          id="outlined-basic-name"
          type="text"
          aria-label="name"
          label="Name"
          name="name"
          variant="outlined"
          size="small"
          value={name}
          onChange={handleChange}
        />

        <TextField
          sx={{
            paddingY: 0,
            marginBottom: 1,
          }}
          id="outlined-basic-email"
          type="email"
          aria-label="email"
          label="Email"
          name="email"
          variant="outlined"
          size="small"
          value={email}
          onChange={handleChange}
        />

        <FormControl
          sx={{ marginBottom: 1, width: '25ch' }}
          size="small"
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            aria-label="password"
            autoComplete="off"
            name="password"
            value={password}
            type={showPassword ? 'text' : 'password'}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOff sx={{ color: 'red' }} />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl
          sx={{ marginBottom: 1, width: '25ch' }}
          size="small"
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Repeat password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-repeat-password"
            aria-label="repeat password"
            autoComplete="off"
            name="repeatPassword"
            value={repeatPassword}
            type={showRepeatPassword ? 'text' : 'password'}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowRepeatPassword}
                  onMouseDown={handleMouseDownRepeatPassword}
                  edge="end"
                >
                  {showRepeatPassword ? (
                    <VisibilityOff sx={{ color: 'red' }} />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Repeat password"
          />
        </FormControl>

        <StyledEngineProvider>
          <CssVarsProvider>
            <Button
              sx={{ paddingY: 1, fontSize: 20 }}
              type="submit"
              aria-label="log in"
              variant="outlined"
              disabled={isLoading}
              loading={isLoading ? true : false}
              loadingPosition="end"
            >
              Registration
            </Button>
          </CssVarsProvider>
        </StyledEngineProvider>
        {/* <Chip
          as="button"
          variant="outlined"
          size="sm"
          aria-label="registration"
        >
          Registration
        </Chip> */}
      </Box>
    </>
  );
};

export default RegistrationPage;
