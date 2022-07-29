import styled from 'styled-components';

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: ${({ width }) => width || '300px'};
`;

export default LoginForm;
