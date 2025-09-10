import { SessionProvider } from 'next-auth/react'
import React from 'react'

function AuthProvider({children}: {children: React.ReactNode}): JSX.Element {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default AuthProvider