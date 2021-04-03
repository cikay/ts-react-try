import React from 'react'
import { Redirect } from 'react-router-dom'

import { useUserContext } from '../contexts/UserContext'

type Props = React.PropsWithChildren<{}>

export default function Home({}: Props) {
  const { isAuthenticated } = useUserContext()
  
  return (
    <>
      {isAuthenticated ? (
        <div>Giriş başarılı</div>
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      )}
    </>
  )
}
