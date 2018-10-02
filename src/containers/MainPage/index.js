import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import * as actionTypes from '../../actions/actionTypes';
import * as actions from '../../actions/numbersAction';
import Modal from '../../components/UI/Modal';
import NumbersStructure from '../../components/NumbersStructure';

import classes from './MainPage.css';

class MainPage extends Component {

  state = {
    show: false,
  }
  modalCloseHandler = () => {
    this.setState({ show: false }, () => this.props.cancelHandler());
  }
  modalShowHandler = () => {
    this.setState({ show: true });
  }
  modalCloseAndSave = () => {
    this.setState({ show: false }, () => this.props.saveHandler());
  }

  render() {
    const { show } = this.state;
    const {
      savedNumbersStructure,
      deleteNumberHandler,
      addNumberHandler,
      editNumberHandler,
    } = this.props;
    console.log(this.props)
    return (
      <div className={classes.MainPage}>
        <Button onClick={this.modalShowHandler}>Show Structure</Button>
        <Modal
          show={show}
          modalClosed={this.modalCloseHandler}
        >
          <NumbersStructure
            nmbStruct={savedNumbersStructure}
            deleteNumb={deleteNumberHandler}
            addNumb={addNumberHandler}
            editNumb={editNumberHandler}
            save={this.modalCloseAndSave}
            cancel={this.modalCloseHandler}
          />
        </Modal>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  numbersStructure: state.numbersStructure,
  savedNumbersStructure: state.savedNumbersStructure,
});

const mapDispatchToProps = dispatch => ({
  deleteNumberHandler: id => dispatch(actions.deleteNumber(id)),
  addNumberHandler: () => dispatch(actions.addNumber()),
  editNumberHandler: (event, id) => dispatch(actions.editNumber(event, id)),
  saveHandler: () => dispatch(actions.save()),
  cancelHandler: () => dispatch(actions.cancel()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
