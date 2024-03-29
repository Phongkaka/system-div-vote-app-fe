import { Fragment, InputHTMLAttributes, LegacyRef, forwardRef } from 'react'

import './Input.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  helperText?: string
  value?: string | number
}

const InputForward = forwardRef(
  (props?: InputProps, ref?: LegacyRef<HTMLInputElement>): JSX.Element => {
    return (
      <Fragment>
        <input
          value={props?.value}
          type={props?.type}
          ref={ref}
          className={
            `${props?.className}` +
            `${
              props?.error ? ' border-red-700' : ' border-2 border-solid border-black'
            } form-control`
          }
          onChange={props?.onChange}
          onBlur={props?.onBlur}
          name={props?.name}
          placeholder={props?.placeholder}
        ></input>
        {!!props?.error && (
          <div className='error-message'>{!!props?.error && props?.helperText}</div>
        )}
      </Fragment>
    )
  }
)

export default InputForward
