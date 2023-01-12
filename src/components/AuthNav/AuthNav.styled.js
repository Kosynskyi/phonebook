import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    color: tomato;
    /* color: #096bde;
    border-color: #6fb6ff; */
  }
`;
