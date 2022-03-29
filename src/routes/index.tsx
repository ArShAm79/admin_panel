import { useSelector } from 'react-redux'

import AuthRouters from './auth'
import MainRouters from './main'

const Routes = () => {
  const { token } = useSelector((state: any) => state.authReducer)
  return token ? <MainRouters /> : <AuthRouters />
}
export default Routes
