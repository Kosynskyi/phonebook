import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import {
  Box,
  TextField,
  Button,
  InputAdornment,
  Alert,
  Snackbar,
} from '@mui/material';

import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

import { createContact } from 'redux/contacts/contactsOperations';
import useContacts from 'services/hooks/useContacts';
import useLoading from 'services/hooks/useLoading';

const ContactAddForm = () => {
  const dispatch = useDispatch();
  const contacts = useContacts();
  const [succsessAlertOpen, setSuccsessAlertOpen] = useState(false);
  const [warningAlertOpen, setWarningAlertOpen] = useState(false);
  const isLoading = useLoading();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  const closeSuccessAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccsessAlertOpen(false);
  };

  const closeWarningAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setWarningAlertOpen(false);
  };

  const onSubmit = data => {
    const normalizedName = data.name.toLowerCase();
    const repeatContactName = contacts.find(
      ({ name }) => name.toLowerCase() === normalizedName
    );

    if (repeatContactName) {
      return setWarningAlertOpen(true);
    }

    dispatch(createContact(data));
    setSuccsessAlertOpen(true);
    reset();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        sx={{ marginBottom: 1, fontSize: '12px' }}
        size="small"
        label="Name"
        required
        variant="standard"
        autoComplete="off"
        id="input-with-icon-textfield"
        {...register('name', {
          required: 'field is required',
          minLength: { value: 2, message: 'minimum 2 symbols' },
          maxLength: { value: 40, message: 'maximum 40 symbols' },
        })}
        type="text"
        helperText={errors?.name && errors?.name?.message}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonAddAlt1Icon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="Phone number"
        required
        id="standard-basic"
        sx={{ marginBottom: 1 }}
        size="small"
        variant="standard"
        autoComplete="off"
        {...register('number', {
          required: 'field is required',
          minLength: { value: 3, message: 'minimum 3 numbers' },
          maxLength: { value: 13, message: 'maximum 13 numbers' },
          pattern: {
            value: /^[0-9]*$/,
            // value:
            //   /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
            message: 'only numbers',
          },
        })}
        type="tel"
        helperText={errors?.number && errors?.number?.message}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AddIcCallIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button variant="outlined" type="submit" disabled={!isValid || isLoading}>
        Add contact
      </Button>

      <Snackbar
        open={succsessAlertOpen}
        autoHideDuration={3000}
        onClose={closeSuccessAlert}
      >
        <Alert severity="success" onClose={closeSuccessAlert}>
          Contact was successfully added!
        </Alert>
      </Snackbar>

      <Snackbar
        open={warningAlertOpen}
        autoHideDuration={3000}
        onClose={closeWarningAlert}
      >
        <Alert severity="warning" onClose={closeWarningAlert}>
          This contact is already contained in the list
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactAddForm;
