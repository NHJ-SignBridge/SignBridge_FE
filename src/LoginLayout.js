import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function LoginLayout({ children }) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}

const Container = styled.div`
  /* Add your styles for the layout container */
`;

const Content = styled.div`
  /* Add your styles for the content */
`;

LoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginLayout;
