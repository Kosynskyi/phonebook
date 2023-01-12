import { Container, Box, Typography } from '@mui/material';

import ContactAddForm from 'components/ContactAddForm';
import ContactsList from 'components/ContactsList';
import ContactsFilter from 'components/ContactsFilter';

const ContactsPage = () => {
  return (
    <Container
      sx={{
        backgroundColor: '#00000020',
        height: '100vh',
      }}
    >
      <Box
        mx={'auto'}
        sx={{
          width: 300,
          height: 300,
          padding: 2,
        }}
      >
        <Typography
          sx={{ marginBottom: 1, textAlign: 'center' }}
          variant="h5"
          component="h2"
        >
          Add new contact
        </Typography>
        <ContactAddForm />
        <Typography
          sx={{ marginBottom: 1, marginTop: 2, textAlign: 'center' }}
          variant="h5"
          component="h2"
        >
          Contacts
        </Typography>
        <ContactsFilter />
        <ContactsList />
      </Box>
    </Container>
  );
};

export default ContactsPage;
