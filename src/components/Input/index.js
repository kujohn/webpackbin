import Inferno from 'inferno'
import styles from './styles.css'
import classnames from 'classnames'

function Input (props) {
  return (
    <input
      id={props.id}
      value={props.value}
      onClick={props.onClick}
      onInput={props.onInput}
      onKeyDown={function (event) {
        if (props.onSubmit && event.keyCode === 13) {
          props.onSubmit()
        } else if (props.onCancel && event.keyCode === 27) {
          props.onCancel()
        }
      }}
      className={classnames(styles.input, {
        [styles.dark]: Boolean(props.dark)
      })}
      autoFocus={props.autoFocus}
      placeholder={props.placeholder}
      />
  )
}

export default Input