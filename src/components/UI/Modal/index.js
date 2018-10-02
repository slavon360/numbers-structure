import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import NumbersStructure from '../../NumbersStructure';

const styles = theme => ({
  container: {
    width: '70%',
  },
  labelSelect: {
    top: '45px',
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '100%',
  },
  actionsWrp: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 20px 10px',
    backgroundColor: '#eee',
    paddingLeft: '20px',
  },
  closeModal: {
    fontSize: '1.5em',
    color: '#000',
    margin: 0,
  }
});

const modal = (props) => {
  const { show, modalClosed, children, classes } = props;
  return (
    <div className={classes.container}>
      <Dialog
          open={show}
          onClose={modalClosed}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <DialogActions className={classes.actionsWrp}>
          <span className={classes.headerText}>Numbers structure</span>
          <Button className={classes.closeModal} onClick={modalClosed} color="primary">
            ╳
          </Button>
        </DialogActions>
          {children}
      </Dialog>
    </div>
  )
}

export default withStyles(styles)(modal);
