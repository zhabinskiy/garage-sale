import React from 'react';
import styled from 'styled-components';
import { Grid as Container } from 'react-flexbox-grid';

export const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const Grid = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
);
