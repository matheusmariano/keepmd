import React from 'react';
import PropTypes from 'prop-types';

const HeaderLabel = ({ className, children, ...props }) => (
  <div
    className={`
      has-padding-x-sm has-padding-y-xs
      has-background-light ${className}
    `}
    {...props}
  >
    <h1
      className="
        is-uppercase is-size-7
        has-text-weight-semibold has-text-dark
      "
    >
      {children}
    </h1>
  </div>
);

HeaderLabel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

HeaderLabel.defaultProps = {
  className: '',
};

export default HeaderLabel;
