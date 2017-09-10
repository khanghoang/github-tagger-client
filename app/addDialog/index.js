/* eslint-disable flowtype/require-valid-file-annotation */
/* eslint-disable react/no-multi-comp */

import { Input } from 'material-ui';
import { compose } from 'recompose';
import { connectModal } from '@khanghoang/redux-modal';
import { withStyles } from 'material-ui/styles';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import React from 'react';
import Typography from 'material-ui/Typography';
import blue from 'material-ui/colors/blue';

import PropTypes from 'prop-types';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles = {
  avatar: {
    background: blue[100],
    color: blue[600],
  },
};

class SimpleDialog extends React.Component {
  handleRequestClose = () => {
    this.props.onRequestClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onRequestClose(value);
  };

  render() {
    const { classes, onRequestClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onRequestClose={this.handleRequestClose} {...other}>
        <DialogTitle>Save repo</DialogTitle>
        <div
          style={{
            padding: 30,
            paddingTop: 0,
          }}
        >
          <Input
            placeholder="Repo url"
            inputProps={{
              'aria-label': 'Description',
            }}
          />
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

class SimpleDialogDemo extends React.Component {
  static defaultProps: {};
  state = {
    open: false,
    selectedValue: emails[1],
  };

  render() {
    return (
      <div>
        <Typography type="subheading">
          Selected: {this.state.selectedValue}
        </Typography>
        <br />
        <SimpleDialogWrapped
          selectedValue={this.state.selectedValue}
          open={this.props.isOpen}
          onRequestClose={this.props.closeModal}
        />
      </div>
    );
  }
}

export default compose(connectModal('AddDialog'))(SimpleDialogDemo);
