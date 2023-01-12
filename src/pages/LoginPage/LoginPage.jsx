import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  TextField,
  IconButton,
  Card,
  CardContent,
  Typography,
  FormHelperText,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';

import { login } from 'redux/auth/authOperations';
import useLoading from 'services/hooks/useLoading';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoading = useLoading();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = data => {
    dispatch(login(data));
    reset();
  };

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);

        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#6fb7ff69',
        height: '100vh',
      }}
    >
      <Typography
        variant="h1"
        component="p"
        sx={{ marginTop: 3, marginBottom: 1, fontWeight: 800, fontSize: 18 }}
      >
        Log in to your account
      </Typography>
      <Typography
        variant="h1"
        component="p"
        sx={{ fontWeight: 400, fontSize: 14 }}
      >
        {' '}
        to enjoy your Phonebook
      </Typography>
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          marginTop: 2,
        }}
      >
        <CardContent>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '25ch',
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              sx={{
                paddingY: 0,
                marginTop: 1,
                width: '100%',
              }}
              id="outlined-basic"
              aria-label="email"
              autoComplete="off"
              type="text"
              label="Email"
              name="email"
              variant="outlined"
              size="small"
              value={email}
              {...register('email', {
                required: 'field is required',
                onChange: handleChange,
              })}
              helperText={errors?.email && errors?.email?.message}
            />

            <FormControl
              sx={{ marginY: '10px', width: '25ch' }}
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
                type={showPassword ? 'text' : 'password'}
                value={password}
                {...register('password', {
                  required: 'field is required',
                  onChange: handleChange,
                })}
                // helperText={errors?.password && errors?.password?.message}

                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOff
                          fontSize="small"
                          sx={{ width: '14px', height: '14px' }}
                        />
                      ) : (
                        <Visibility
                          fontSize="small"
                          sx={{ width: '14px', height: '14px' }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <FormHelperText id="outlined-adornment-password">
                {errors?.password && errors?.password?.message}
              </FormHelperText>
            </FormControl>
            <Button
              sx={{ fontSize: 12, width: '100%' }}
              size="small"
              type="submit"
              aria-label="log in"
              variant="outlined"
              disabled={!isValid || isLoading}
              // loading={isLoading ? true : false}
              // loadingPosition="start"
              endIcon={<LoginIcon sx={{ marginLeft: 1 }} />}
            >
              Log in
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
