import { Box, List, ListItem, Button } from '@mui/material/';

import { StyledNavLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Box>
      <Box component="nav" aria-label="authorisation">
        <List
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 0,
          }}
        >
          <ListItem sx={{ padding: 0 }}>
            <StyledNavLink to="/login" end>
              <Button
                variant="outlined"
                size="sm"
                sx={{ color: '#096BDE', borderColor: '#6FB6FF' }}
              >
                Login
              </Button>
            </StyledNavLink>
          </ListItem>

          <ListItem sx={{ padding: 0 }}>
            <StyledNavLink to="/registration">
              <Button
                variant="outlined"
                size="sm"
                sx={{
                  color: '#096BDE',
                  borderColor: '#6FB6FF',
                  marginLeft: '15px',
                }}
              >
                Registration
              </Button>
            </StyledNavLink>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default AuthNav;
