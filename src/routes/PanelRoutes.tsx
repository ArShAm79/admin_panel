import { Route, Switch } from 'react-router-dom'

import ActivityLog from '../pages/activityLog'
import AddCateogry from '../pages/addCategory'
import AddTable from '../pages/addTable'
import Cateogries from '../pages/cateogries'
import ChangePassword from '../pages/changePassword'
import ManageConfiguration from '../pages/configuration'
import Dashboard from '../pages/dashboard'
import EditCateogry from '../pages/editCategory'
import EditTable from '../pages/editTable'
import ManageAdmins from '../pages/manageAdmins'
import ManageAdminsEdit from '../pages/manageAdminsEdit'
import ManageAdminsRegister from '../pages/manageAdminsRegister'
import WhilteList from '../pages/whileList'

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
      <Route exact path="/admin-table">
        <ManageAdmins />
      </Route>
      <Route exact path="/admin-table/edit/:id">
        <ManageAdminsEdit />
      </Route>
      <Route exact path="/admin-table/register">
        <ManageAdminsRegister />
      </Route>
      <Route exact path="/categories">
        <Cateogries />
      </Route>
      <Route exact path="/categories/add">
        <AddCateogry />
      </Route>
      <Route exact path="/categories/edit/:id">
        <EditCateogry />
      </Route>
      <Route exact path="/white-list">
        <WhilteList />
      </Route>
      <Route exact path="/configuration">
        <ManageConfiguration />
      </Route>
      {/* <Redirect to="/" /> */}
    </Switch>
  )
}
export default PanelRoutes
