import Box from '@mui/material/Box';
import List from '@mui/material/List';
// import Button from '@mui/material/Button';
import Button from '@mui/joy/Button';
import { StyledNavLink } from './AuthNav.styled';
// import ListItem from '@mui/material/ListItem';

const AuthNav = () => {
  return (
    <Box>
      <nav aria-label="authorisation">
        <List
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 0,
          }}
        >
          <StyledNavLink to="/login" end>
            <Button
              variant="outlined"
              size="sm"
              sx={{ color: '#096BDE', borderColor: '#6FB6FF' }}
            >
              Login
            </Button>
          </StyledNavLink>
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
        </List>
      </nav>
    </Box>
  );
};

export default AuthNav;
