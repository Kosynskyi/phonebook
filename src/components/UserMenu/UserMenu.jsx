import { Navigate } from 'react-router-dom';
import Button from '@mui/joy/Button';
import Box from '@mui/material/Box';
import { Logout } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import useLoading from 'services/hooks/useLoading';
import { Text } from './UserMenu.styled';

const UserMenu = () => {
  const isLoading = useLoading();
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  const handleClick = () => {
    dispatch(logOut());
    <Navigate to="/" />;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>
        Welcome, <b>{name}</b>
      </Text>
      <StyledEngineProvider>
        <CssVarsProvider>
          <Button
            variant="outlined"
            size="sm"
            sx={{ color: 'red', marginLeft: '15px' }}
            disabled={isLoading}
            loading={isLoading ? true : false}
            loadingPosition="end"
            endDecorator={<Logout />}
            type="button"
            onClick={handleClick}
          >
            Log out
          </Button>
        </CssVarsProvider>
      </StyledEngineProvider>
    </Box>
  );
};

export default UserMenu;
