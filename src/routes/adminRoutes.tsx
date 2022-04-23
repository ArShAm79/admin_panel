import { Route } from 'react-router-dom'

import AddCateogry from '../pages/addCategory'
import AddTable from '../pages/addTable'
import Cateogries from '../pages/cateogries'
import ChangePassword from '../pages/changePassword'
import Dashboard from '../pages/dashboard'
import EditCateogry from '../pages/editCategory'
import EditTable from '../pages/editTable'

const AdminRoutes = () => {
  return (
    <>
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
      <Route exact path="/categories">
        <Cateogries />
      </Route>
      <Route exact path="/categories/add">
        <AddCateogry />
      </Route>
      <Route exact path="/categories/edit/:id">
        <EditCateogry />
      </Route>
    </>
  )
}
export default AdminRoutes
