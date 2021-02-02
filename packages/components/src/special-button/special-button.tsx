import React from 'react'
import { Button } from 'theme-ui'

type SpecialButtonProps = {}

const SpecialButton: React.FC<SpecialButtonProps> = (props) => {
  return <Button variant="secondary">{props.children}</Button>
}

export { SpecialButton }
