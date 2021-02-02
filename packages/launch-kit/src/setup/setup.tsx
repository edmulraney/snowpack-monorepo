import React from 'react'
import { Heading } from 'theme-ui'
import { SpecialButton } from '@edmulraney/components'

type SetupProps = { a: boolean }

const Setup: React.FC<SetupProps> = (props) => {
  return (
    <>
      <Heading>Setup</Heading>
      <SpecialButton>Begin setup</SpecialButton>
    </>
  )
}

export { Setup }
