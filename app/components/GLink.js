import React from 'react';
import { withHandlers, compose } from 'recompose';

const GLink = ({ onClick, children }) => (
  <button
    style={{ textDecoration: 'underline', cursor: 'pointer' }}
    onClick={onClick}
  >
    {children}
  </button>
);

const enhance = compose(
  withHandlers({
    onClick: ({ url }) =>
      () => {
        console.log(`open chrome ${url}`);
      },
  })
);

export default enhance(GLink);
