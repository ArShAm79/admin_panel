import { ThemeProvider } from '@material-ui/core'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import theme from './assets/theme'
import { saveUser } from './redux/auth/action'
import Routes from './routes'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('user')) {
      dispatch(saveUser(JSON.parse(localStorage.getItem('user')!)))
    } else if (sessionStorage.getItem('user')) {
      dispatch(saveUser(JSON.parse(sessionStorage.getItem('user')!)))
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  )
}

export default App
