import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  formControlAction: {
    width: '35%',
    margin: theme.spacing.unit,
  },
  formControlNumber: {
    width: '20%',
    margin: theme.spacing.unit,
  },
  buttonDelete: {
    verticalAlign: 'bottom',
    width: '30px',
    height: '30px',
    minHeight: '30px',
    transform: 'translateY(-5px)',
    borderRadius: '50%',
    backgroundColor: '#e6cccc',
    color: 'rgba(214, 69, 69, 0.87)',
    fontWeight: 700,
    minWidth: 'auto',
    padding: '8px',
    lineHeight: '1.1em',
    marginLeft: '10px',
  },
  inpLabel: {
    transform: 'scale(0.75)',
  }
});

const numberStructure = ({nmb, onEditNumb, onDeleteNumb, classes}) => (
    <div>
      <FormControl className={classes.formControlAction}>
        <InputLabel className={classes.inpLabel} htmlFor={`action-number-${nmb.id}`}>Choose action</InputLabel>
        <Select
          value={nmb.actionNumber}
          onChange={onEditNumb}
          inputProps={{
            name: 'actionNumber',
            id: `action-number-${nmb.id}`,
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={2}>Twin</MenuItem>
          <MenuItem value={3}>Tripple</MenuItem>
          <MenuItem value={4}>Quadro</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControlNumber}>
        <InputLabel htmlFor={`number-value-${nmb.id}`}>Number</InputLabel>
        <Input
          name="numberValue"
          id={`number-value-${nmb.id}`}
          type="number"
          value={nmb.numberValue}
          onChange={onEditNumb}
        />
      </FormControl>
      <Button
        className={classes.buttonDelete}
        type="button"
        onClick={onDeleteNumb}
      >╳</Button>
  </div>
  )

export default withStyles(styles)(numberStructure);
