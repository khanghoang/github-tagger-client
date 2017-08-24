import { withHandlers, compose } from 'recompose';
import React from 'react';

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
