import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';

const useToken = () => {
  const token = useSelector(selectToken);
  return token;
};

export default useToken;
