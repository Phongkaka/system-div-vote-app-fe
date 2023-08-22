import { Fragment, TextareaHTMLAttributes, LegacyRef, forwardRef } from 'react'

import './Input.scss'

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
  helperText?: string
}

const TextAreaForward = forwardRef(
  (props: InputProps, ref: LegacyRef<HTMLTextAreaElement>): JSX.Element => {
    return (
      <Fragment>
        <textarea
          ref={ref}
          {...props}
          className={
            `${props.className || ''}` +
            `${props.error ? ' border-red-700' : ' border-zinc-200'} form-control`
          }
        ></textarea>
        {!!props.error && <div className='error-message'>{props.error && props.helperText}</div>}
      </Fragment>
    )
  }
)

export default TextAreaForward
