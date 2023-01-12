import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';

const useContacts = () => {
  const contacts = useSelector(selectContacts);
  return contacts;
};

export default useContacts;
