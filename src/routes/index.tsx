import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import AuthRouters from './auth'
import MainRouters from './main'

const Routes = () => {
  const { token } = useSelector((state: any) => state.authReducer)
  const history = useHistory()

  useEffect(() => {
    if (!localStorage.getItem('token') && !sessionStorage.getItem('token'))
      history.push('/login')

    // }
  }, [token, history])

  return token ? <MainRouters /> : <AuthRouters />
}
export default Routes
