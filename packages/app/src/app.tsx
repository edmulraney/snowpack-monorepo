import React, { useState, useEffect } from 'react'
import { Heading } from 'theme-ui'
import { Setup } from '@edmulraney/launch-kit'

type AppProps = {}

export const App: React.FC<AppProps> = (props) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000)
    return () => clearTimeout(timer)
  }, [count, setCount])

  return (
    <header>
      <Heading variant="secondary">App</Heading>
      <p>
        Page has been open for <code>{count}</code> seconds :D
      </p>
      <Setup />
    </header>
  )
}
