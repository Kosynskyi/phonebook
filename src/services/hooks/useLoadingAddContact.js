import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';

const useLoadingAddContact = () => {
  const isLoading = useSelector(selectIsLoading);
  return isLoading;
};

export default useLoadingAddContact;
