import * as React from 'react'
import classNames from 'classnames'
import createDOMForm from 'rc-form/lib/createDOMForm'
import createFormField from 'rc-form/lib/createFormField'
import warning from '../_util/warning'
import FormItem from './FormItem'
import { FIELD_META_PROP, FIELD_DATA_PROP } from './constants'
import FormContext from './context'
import CompatibleConsumer from '../CompatibleConsumer'

export default class Form extends React.Component {
  static defaultProps = {
    colon: true,
    layout: 'horizontal',
    hideRequiredMark: false,
    onSubmit(e) {
      e.preventDefault()
    },
  }

  static Item = FormItem

  static createFormField = createFormField

  static create = function create(options = {}) {
    return createDOMForm({
      fieldNameProp: 'id',
      ...options,
      fieldMetaProp: FIELD_META_PROP,
      fieldDataProp: FIELD_DATA_PROP,
    })
  }

  constructor(props) {
    super(props)

    warning(!props.form, 'Form', 'It is unnecessary to pass `form` to `Form` after antd@1.7.0.')
  }

  componentDidMount() {
    try {
      warning(
        getComputedStyle(document.querySelector('.ant-col'), null).getPropertyValue('position') === 'relative',
        'Form',
        'If missing `Grid` style, you should import it, Please follow https://github.com/ant-design/compatible#faq.'
      )
    } catch (error) {
      warning(false, 'Form', error)
    }
  }

  renderForm = ({ getPrefixCls }) => {
    const { prefixCls: customizePrefixCls, hideRequiredMark, className = '', layout } = this.props
    const prefixCls = getPrefixCls('legacy-form', customizePrefixCls)
    const formClassName = classNames(
      prefixCls,
      {
        [`${prefixCls}-horizontal`]: layout === 'horizontal',
        [`${prefixCls}-vertical`]: layout === 'vertical',
        [`${prefixCls}-inline`]: layout === 'inline',
        [`${prefixCls}-hide-required-mark`]: hideRequiredMark,
      },
      className
    )

    const {
      prefixCls: _prefixCls,
      className: _className,
      layout: _layout,
      form: _form,
      hideRequiredMark: _hideRequiredMark,
      wrapperCol: _wrapperCol,
      labelAlign: _labelAlign,
      labelCol: _labelCol,
      colon: _colon,
      ...formProps
    } = this.props

    return <form {...formProps} className={formClassName} />
  }

  render() {
    const { wrapperCol, labelAlign, labelCol, layout, colon } = this.props
    return (
      <FormContext.Provider
        value={{
          wrapperCol,
          labelAlign,
          labelCol,
          vertical: layout === 'vertical',
          colon,
        }}
      >
        <CompatibleConsumer>{this.renderForm}</CompatibleConsumer>
      </FormContext.Provider>
    )
  }
}
