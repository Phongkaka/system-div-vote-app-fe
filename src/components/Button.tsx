import React, { ButtonHTMLAttributes } from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...rest
}) => {
  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    success: 'bg-green hover:bg-green-600 text-black',
    danger: 'bg-red-500 hover:bg-red-600 text-white'
  }

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-md',
    lg: 'px-6 py-3 text-lg'
  }

  const buttonClasses = `rounded ${variantClasses[variant]} ${sizeClasses[size]} focus:outline-none focus:ring-2 focus:ring-${variant}-400 focus:ring-opacity-50`

  return (
    <button className={clsx(buttonClasses, className)} {...rest}>
      {children}
    </button>
  )
}

export default Button
