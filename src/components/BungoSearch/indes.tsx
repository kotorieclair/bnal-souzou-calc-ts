import * as React from 'react'

export interface Props {
  readonly className?: string
  readonly isOpen: boolean
}

const CardSearch: React.FC<Props> = ({ className, isOpen }: Props) => {
  return <div className={className}>card search</div>
}
