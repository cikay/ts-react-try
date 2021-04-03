import React from 'react'
import { useHistory } from 'react-router-dom'
import { useUserContext } from '../contexts/UserContext'

type Props = React.PropsWithChildren<{}>

export default function Login({}: Props) {
  const { login } = useUserContext()
  const history = useHistory()
  const handleClick = () => {
    login()
    history.push('/')
  }
  return (
    <div>
      <button onClick={handleClick}>Giriş yap</button>
    </div>
  )
}
