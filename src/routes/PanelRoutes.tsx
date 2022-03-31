import { Redirect, Route, Switch } from 'react-router-dom'

import ChangePassword from '../pages/changePassword'

const PanelRoutes = () => {
  return (
    <Switch>
      <Route exact path="/change-password">
        <ChangePassword />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}
export default PanelRoutes
