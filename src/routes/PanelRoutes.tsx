import { useSelector } from 'react-redux'
import { Switch } from 'react-router-dom'

import AdminRoutes from './adminRoutes'
import FounderRoutes from './founderRoutes'

const PanelRoutes = () => {
  const { role } = useSelector((state: any) => state.authReducer)
  return (
    <Switch>
      {role.permissions.role === 'GOD' ? <FounderRoutes /> : <AdminRoutes />}
    </Switch>
  )
}
export default PanelRoutes
