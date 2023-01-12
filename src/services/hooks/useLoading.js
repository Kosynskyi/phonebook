import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/authSelectors';

const useLoading = () => {
  const isLoading = useSelector(selectIsLoading);
  return isLoading;
};

export default useLoading;
