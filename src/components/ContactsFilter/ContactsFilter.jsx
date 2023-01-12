import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { TextField, Box } from '@mui/material';

import { filterContacts } from 'redux/filter/filterSlice';

const ContactsFilter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    dispatch(filterContacts(value));
    setFilter(value);
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
      <TextField
        id="standard-search"
        label="Search field"
        variant="standard"
        type="search"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </Box>
  );
};

export default ContactsFilter;
