import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import {
  Box,
  Button,
  Card,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  TextField,
  IconButton,
  FormHelperText,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = data => {
    console.log(data);
    if (data.password !== data.repeatPassword) {
      return toast.error(
        'Password and repeat password does not match, please check them and try again'
      );
    }
    dispatch(registration(data));
    reset();
  };

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
        sx={{
          marginTop: 3,
          marginBottom: 1,
          fontWeight: 800,
          fontSize: 18,
          textAlign: 'center',
        }}
      >
        Take the first easy step to back up your contacts
      </Typography>
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          marginTop: 2,
          padding: 2,
        }}
      >
        <Box
          component="form"
          autoComplete="off"
          sx={{ display: 'flex', flexDirection: 'column', width: '25ch' }}
          onSubmit={handleSubmit(onSubmit)}
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
            {...register('name', {
              required: 'field is required',
              onChange: handleChange,
            })}
            helperText={errors?.name && errors?.name?.message}
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
            {...register('email', {
              required: 'field is required',
              onChange: handleChange,
            })}
            helperText={errors?.email && errors?.email?.message}
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
              type={showPassword ? 'text' : 'password'}
              value={password}
              {...register('password', {
                required: 'field is required',
                onChange: handleChange,
              })}
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
                        sx={{ color: 'red', width: '14px', height: '14px' }}
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
              type={showRepeatPassword ? 'text' : 'password'}
              value={repeatPassword}
              {...register('repeatPassword', {
                required: 'field is required',
                onChange: handleChange,
              })}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowRepeatPassword}
                    onMouseDown={handleMouseDownRepeatPassword}
                    edge="end"
                  >
                    {showRepeatPassword ? (
                      <VisibilityOff
                        fontSize="small"
                        sx={{ color: 'red', width: '14px', height: '14px' }}
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
              label="Repeat password"
            />
            <FormHelperText id="outlined-adornment-password">
              {errors?.repeatPassword && errors?.repeatPassword?.message}
            </FormHelperText>
          </FormControl>

          <Button
            sx={{ fontSize: 12, width: '100%' }}
            size="small"
            type="submit"
            aria-label="log in"
            variant="outlined"
            disabled={isLoading}
            // loading={isLoading ? true : false}
            // loadingPosition="end"
          >
            Registration
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default RegistrationPage;
