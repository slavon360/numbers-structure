import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import NumberStructure from './NumberStructure';

import outerClasses from './NumbersStructure.css';

const styles = theme => ({
  formControlAction: {
    width: '30%',
    margin: theme.spacing.unit,
  },
  formControlNumber: {
    width: '45%',
    margin: theme.spacing.unit,
  },
  buttonAdd: {
    display: 'block',
    color: 'rgba(8, 206, 243, 0.87)',
    fontWeight: 700,
    margin: '15px 0',
    paddingLeft: 0,
  },
  buttonSave: {
    backgroundColor: 'rgba(8, 206, 243, 0.87)',
    color: '#fff',
    marginRight: '15px',
    fontWeight: 700,
  },
  buttonCancel: {
    fontWeight: 700,
    color: '#000',
  }
});

const numbersStructure = ({nmbStruct, deleteNumb, editNumb, addNumb, save, cancel, classes}) => (
    <form className={outerClasses.NumbersStructure}>
      {nmbStruct && nmbStruct.length ? nmbStruct.map((nmb, index) =>
        (<NumberStructure
              nmb={nmb}
              onDeleteNumb={() => deleteNumb(nmb.id)}
              onEditNumb={(event) => editNumb(event, nmb.id)}
              key={nmb.id}
            />)
          ) : null
      }
      <Button className={classes.buttonAdd} type="button" onClick={addNumb}>Add</Button>
      <Button className={classes.buttonSave} type="button" onClick={save}>Save</Button>
      <Button className={classes.buttonCancel} type="button" onClick={cancel}>Cancel</Button>
    </form>
  )

export default withStyles(styles)(numbersStructure);
