import * as React from 'react'

export interface Props {
  readonly className?: string
  readonly children: React.ReactNode
  readonly onClick: () => void
}

const Button: React.FC<Props> = ({ className, children }: Props) => {
  return <button className={className}>{children}</button>
}

export default Button
