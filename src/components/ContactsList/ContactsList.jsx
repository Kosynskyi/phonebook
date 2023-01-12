import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Box,
  List,
  ListItem,
  Typography,
  IconButton,
  Avatar,
  Alert,
  Snackbar,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { deleteContact } from 'redux/contacts/contactsOperations';
import useContacts from 'services/hooks/useContacts';
import useFilter from 'services/hooks/useFilter';

const ContactsList = () => {
  const [deleteAlertOpen, setDeleteAlertOpen] = useState(false);
  const dispatch = useDispatch();
  const contacts = useContacts();
  const filter = useFilter();
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts
    .filter(item => item.name.toLowerCase().includes(normalizedFilter))
    .sort((a, b) => a.name.localeCompare(b.name));

  const closeDeleteAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setDeleteAlertOpen(false);
  };

  const stringAvatar = name => {
    const result = name
      .split(' ')
      .map(item => item[0])
      .splice(0, 2)
      .join('')
      .toUpperCase();

    return {
      children: result,
    };
  };

  const deleteAddedContacts = id => {
    dispatch(deleteContact(id));
    setDeleteAlertOpen(true);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
      }}
    >
      {contacts.length < 1 ? (
        <Typography
          sx={{ marginBottom: 1, marginTop: 2, textAlign: 'center' }}
          variant="h5"
          component="h2"
        >
          You haven't added anything yet :(
        </Typography>
      ) : (
        <>
          <Typography
            sx={{ marginBottom: 1, marginTop: 2, textAlign: 'center' }}
            variant="h6"
            component="h3"
          >
            Your contact list:{' '}
          </Typography>
          <List sx={{ paddingY: 0 }}>
            {visibleContacts.map(({ id, name, number }, index) => (
              <ListItem
                key={id}
                sx={{
                  padding: 1,
                  justifyContent: 'space-between',
                  backgroundColor:
                    index % 2
                      ? { backgroundColor: '#fdffe0' }
                      : { backgroundColor: 'white' },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Avatar
                    sx={{
                      width: 24,
                      height: 24,
                      marginRight: 1,
                      fontSize: '10px',
                    }}
                    {...stringAvatar(name)}
                  />
                  <Typography variant="subtitle1" component="p">
                    {name}: {number}
                  </Typography>
                </Box>

                <IconButton
                  type="button"
                  edge="end"
                  aria-label="delete"
                  sx={{
                    margin: 0,
                    padding: 0,
                    color: ' #0000ffcc',
                    transition: '500ms',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                  onClick={() => deleteAddedContacts(id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Snackbar
        open={deleteAlertOpen}
        autoHideDuration={3000}
        onClose={closeDeleteAlert}
      >
        <Alert severity="success" onClose={closeDeleteAlert}>
          Contact was successfully deleted!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactsList;
