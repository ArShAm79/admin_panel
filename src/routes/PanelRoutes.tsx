import { Route, Switch } from 'react-router-dom'

import AddTable from '../pages/addTable'
import ChangePassword from '../pages/changePassword'

const PanelRoutes = () => {
  return (
    <Switch>
      <Route exact path="/change-password">
        <ChangePassword />
      </Route>
      <Route exact path="/add-table">
        <AddTable />
      </Route>
      {/* <Redirect to="/" /> */}
    </Switch>
  )
}
export default PanelRoutes
