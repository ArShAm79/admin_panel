export const getToken = () => {
  if (localStorage.getItem('user')) {
    return JSON.parse(localStorage.getItem('user') || '').token.access_token
  } else if (sessionStorage.getItem('user'))
    return JSON.parse(sessionStorage.getItem('user') || '').token.access_token
  return ''
}
