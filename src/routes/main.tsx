import { Route } from 'react-router-dom'

import MainPage from '../pages/mainDrawer'

const MainRouters = () => {
  return (
    <>
      <Route path="/">
        <MainPage />
      </Route>
    </>
  )
}
export default MainRouters
