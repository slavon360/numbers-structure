import * as actionTypes from '../actions/actionTypes';

const initState = {
  numbersStructure: [
    { actionNumber: 2, numberValue: 22, id: 1 },
    { actionNumber: 3, numberValue: 12, id: 2 },
    { actionNumber: 4, numberValue: 4, id: 3 }
  ],
  savedNumbersStructure: [
    { actionNumber: 2, numberValue: 22, id: 1 },
    { actionNumber: 3, numberValue: 12, id: 2 },
    { actionNumber: 4, numberValue: 4, id: 3 }
  ],
}

const cancel = (state, action) => {
  const { numbersStructure } = state;
  const savedNumbersStructure = numbersStructure.map(obj => ({...obj}));
  return {
    ...state,
    savedNumbersStructure,
  }
}

const save = (state, action) => {
  const { savedNumbersStructure } = state;
  const numbersStructure = savedNumbersStructure.map(obj => ({...obj}));
  return {
    ...state,
    numbersStructure,
  }
}

const deleteNumber = (state, action) => {
  const { id } = action;
  const { savedNumbersStructure } = state;
  let updNumbersStructure = savedNumbersStructure.map(obj => ({...obj}));
  updNumbersStructure = updNumbersStructure.filter(obj => obj.id !== id);
  return {
    ...state,
    savedNumbersStructure: updNumbersStructure,
  }
}

const addNumber = (state, action) => {
  const { savedNumbersStructure } = state;
  const ln = savedNumbersStructure.length;
  const updNumbersStructure = [...savedNumbersStructure, {
    actionNumber: '',
    numberValue: '',
    id: savedNumbersStructure[ln-1].id + 1,
  }];
  return {
    ...state,
    savedNumbersStructure: updNumbersStructure,
  }
}

const editNumber = (state, action) => {
  const { event, id } = action;
  const { name, value } = event.target;
  const { savedNumbersStructure } = state;
  let updNumbersStructure = savedNumbersStructure.map(obj => ({
    ...obj,
    [name]: obj.id === id ? (+value) : obj[name],
  }));
  return {
    ...state,
    savedNumbersStructure: updNumbersStructure,
  }
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_NUMBER:
      return deleteNumber(state, action);
    case actionTypes.ADD_NUMBER:
      return addNumber(state, action);
    case actionTypes.EDIT_NUMBER:
      return editNumber(state, action);
    case actionTypes.CANCEL:
      return cancel(state, action);
    case actionTypes.SAVE:
      return save(state, action);
    default: return state;
  }
}

export default reducer;
