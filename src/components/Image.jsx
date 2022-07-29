import styled from 'styled-components';

const Image = styled.img.attrs(({ src }) => ({
  src,
}))`
   width: ${({ width }) => width || '100%'}; 
`;

export default Image;
