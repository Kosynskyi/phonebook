import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/filterSelectors';

const useFilter = () => {
  const filter = useSelector(selectFilter);
  return filter;
};

export default useFilter;
