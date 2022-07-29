import styled from 'styled-components';

const Input = styled.input.attrs(({ type, placeholder }) => ({
  type: type || 'text',
  placeholder: placeholder || 'type something',
}))`
    padding: 4px 5px;
    width: ${({ width }) => width || '100%'};
    border-radius: 3px;
    border: 0.1px solid gray;
`;

export default Input;
