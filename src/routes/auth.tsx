import { Route } from 'react-router-dom'

import LoginPage from '../pages/login'

const AuthRouters = () => {
  return (
    <>
      <Route>
        <LoginPage />
      </Route>
    </>
  )
}
export default AuthRouters
