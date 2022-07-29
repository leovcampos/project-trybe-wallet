import styled from 'styled-components';

const InfoText = styled.p`
    font-size: ${({ size }) => size || '15px'};
    color: ${({ color }) => color || 'black'}
`;

export default InfoText;
