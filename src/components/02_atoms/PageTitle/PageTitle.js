import React from 'react';
import PropTypes from 'prop-types';
import withSideEffect from 'react-side-effect';
import { css } from 'emotion';

import Typography from '@material-ui/core/Typography';

const styles = {
  title: css`
    margin-bottom: 15px;
    margin-left: 3px;
  `,
};

const PageTitle = ({ children }) => (
  <Typography variant="headline" classes={{ root: styles.title }}>{children}</Typography>
);

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

function reducePropsToState(propsList) {
  const innermostProps = propsList[propsList.length - 1];
  if (innermostProps) {
    return innermostProps.children;
  }
}

function handleStateChangeOnClient(title) {
  document.title = title || '';
}

export default withSideEffect(reducePropsToState, handleStateChangeOnClient)(
  PageTitle,
);
