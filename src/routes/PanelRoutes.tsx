import { Route } from 'react-router-dom'

import ChangePassword from '../pages/changePassword'

const PanelRoutes = () => {
  return (
    <>
      <Route exact path="/change-password">
        <ChangePassword />
      </Route>
    </>
  )
}
export default PanelRoutes
