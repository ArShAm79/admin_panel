import { Route, Switch } from 'react-router-dom'

import ActivityLog from '../pages/activityLog'
import AddTable from '../pages/addTable'
import ChangePassword from '../pages/changePassword'
import Dashboard from '../pages/dashboard'
import EditTable from '../pages/editTable'

const PanelRoutes = () => {
  return (
    <Switch>
      <Route exact path="/change-password">
        <ChangePassword />
      </Route>
      <Route exact path="/add-table">
        <AddTable />
      </Route>
      <Route exact path="/edit-table/:id">
        <EditTable />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/activity-log">
        <ActivityLog />
      </Route>
      {/* <Redirect to="/" /> */}
    </Switch>
  )
}
export default PanelRoutes
