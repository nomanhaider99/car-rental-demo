import React from 'react'

interface ButtonProps {
  content: string,
  secondary?: boolean,
  className?: string
}

const Button = ({
  content,
  secondary,
  className
}: ButtonProps) => {
  return (
    <button
      className={`
                ${secondary ? 'bg-white text-blue-600 border-[1px] border-muted-foreground' : 'bg-blue-600 shadow-blue-600 text-white'}
                px-4 py-2 rounded-full shadow-sm text-lg w-full ${className}
            `}
    >
      {content}
    </button>
  )
}

export default Button