import * as React from 'react'

/**
 * vertical: boolean;
  colon?: boolean;
  labelAlign?: FormLabelAlign;
  labelCol?: ColProps;
  wrapperCol?: ColProps;
 */
const FormContext = /*#__PURE__*/ React.createContext({
  labelAlign: 'right',
  vertical: false,
})
export default FormContext
