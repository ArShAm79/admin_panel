import { Redirect, Route, Switch } from 'react-router-dom'

import LoginPage from '../pages/login'

const AuthRouters = () => {
  return (
    <Switch>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Redirect to="/login" />
    </Switch>
  )
}
export default AuthRouters
