/* eslint-disable flowtype/require-valid-file-annotation */
/* eslint-disable react/no-multi-comp */

import { Button, Input } from 'material-ui';
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
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 20,
    padding: '0 10px',
    marginLeft: 15,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
    width: 40,
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
          <Button onPress={() => {}} className={classes.button}>
            Add
          </Button>
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
