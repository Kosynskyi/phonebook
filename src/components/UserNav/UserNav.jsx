import { Box, List, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';

import useAuth from 'services/hooks/useAuth';
import { StyledNavLink } from './UserNav.styled';

const UserNav = () => {
  const isLoggedIn = useAuth();
  return (
    <Box>
      <List
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 0,
        }}
      >
        <StyledNavLink to="/">
          <IconButton
            aria-label="home"
            size="large"
            sx={{ padding: 0, color: 'grey' }}
          >
            <HomeIcon fontSize="inherit" />
          </IconButton>
        </StyledNavLink>
        {isLoggedIn && (
          <StyledNavLink to="/contacts">
            <IconButton
              aria-label="contacts"
              size="large"
              sx={{ padding: 0, marginLeft: 2, color: 'grey' }}
            >
              <ContactsIcon fontSize="inherit" />
            </IconButton>
          </StyledNavLink>
        )}
      </List>
    </Box>
  );
};

export default UserNav;
