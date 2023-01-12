import Button from '@mui/joy/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
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
          <Button variant="outlined" size="sm">
            Home
          </Button>
        </StyledNavLink>
        {isLoggedIn && (
          <StyledNavLink to="/contacts">
            <Button variant="outlined" size="sm" sx={{ marginLeft: 1 }}>
              Contact
            </Button>
          </StyledNavLink>
        )}
      </List>
    </Box>
  );
};

export default UserNav;
