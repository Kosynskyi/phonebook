import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    color: tomato;
    /* border-color: tomato; */
  }
`;
