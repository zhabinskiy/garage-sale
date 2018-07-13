import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 36px;
  font-weight: normal;
  line-height: 1.1;
  color: #000;
`;

export const H2 = H1.extend`
  font-size: 24px;
`.withComponent('h2');

export const H3 = H2.extend`
  font-size: 20px;
`.withComponent('h3');
