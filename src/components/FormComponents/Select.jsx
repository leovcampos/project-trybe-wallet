import styled from 'styled-components';

const Select = styled.select`
  padding: 2px 5px;
  width: ${({ width }) => width || '100%'};
`;

export default Select;
