import { ThemeProvider } from '@material-ui/core'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import theme from './assets/theme'
import { saveUser } from './redux/auth/action'
import Routes from './routes'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(saveUser(localStorage.getItem('token')!))
    } else if (sessionStorage.getItem('token')) {
      dispatch(saveUser(sessionStorage.getItem('token')!))
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  )
}

export default App
