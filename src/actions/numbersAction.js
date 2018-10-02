import * as actionTypes from '../actions/actionTypes';

export const deleteNumber = id => ({
  type: actionTypes.DELETE_NUMBER,
  id,
});

export const addNumber = () => ({
  type: actionTypes.ADD_NUMBER,
});

export const editNumber = (event, id) => ({
  type: actionTypes.EDIT_NUMBER,
  event,
  id,
});

export const cancel = () => ({
  type: actionTypes.CANCEL,
});

export const save = () => ({
  type: actionTypes.SAVE,
});
