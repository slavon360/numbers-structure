import { createStore, compose } from 'redux';
import numbers from '../reducers/numbersReducer';

const initStore = () => {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'numbers',
      }) : compose;
  /* eslint-enable no-underscore-dangle */

  const store = createStore(
    numbers,
    composeEnhancers(),
  );
  return store;
};

export default initStore();
