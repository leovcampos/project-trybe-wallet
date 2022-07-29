import styled from 'styled-components';

const Button = styled.button.attrs(({ type }) => ({
  type: type || 'button',
}))`
    align-self: center;
    padding: 5px 15px;
    background-color: ${({ backColor }) => backColor || 'green'};
    color: ${({ color }) => color || 'black'};
    border: none;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
`;

export default Button;
