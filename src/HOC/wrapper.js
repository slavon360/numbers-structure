import React from 'react'
import commonStyles from '../styles/commonStyles';

const translateProps = (props) => {
    let _styles = {
      ...commonStyles.default,
    };
    if (props.disable) {
      _styles = {
        ..._styles,
        ...commonStyles.disable,
      };
      const newProps = { ...props, styles: _styles };
      return newProps;
    }
    return { ...props, styles: _styles };
}

const wrapper = (wrappedComponent) => {
  return function (args) {
    return wrappedComponent(translateProps(args));
  }
}

export default wrapper
