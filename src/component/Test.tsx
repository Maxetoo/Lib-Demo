import React from 'react'
import './main.css'
interface TestProps {
  children: string
  onClick?: () => void
}

export const Test = ({ children, ...props }: TestProps) => {
  return (
    <div className='test' {...props}>
      This is just a test component
      <button onClick={() => console.log(true)}>{children}</button>
    </div>
  )
}
