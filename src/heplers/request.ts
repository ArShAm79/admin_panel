import { toast } from 'react-toastify'

import { getToken } from './userData'

const BASE_URL = process.env.REACT_APP_API_BASE_URL

export default async function request(
  endpoint: string,
  method: string = 'GET',
  body?: any
) {
  let status: number
  return fetch(BASE_URL + endpoint, {
    method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify(body)
  })
    .then((response) => {
      status = response.status
      return response.json()
    })
    .then((responseJSON) => {
      if (status >= 200 && status < 300) return { responseJSON, status }
      else {
        return { responseJSON, status }
      }
    })
    .catch((res) => {
      sessionStorage.clear()
      localStorage.clear()
      // const dispatch = useDispatch()
      // dispatch(logOut())
      window.location.reload()
      toast.error('Please log in')
      return { responseJSON: res, status }
      // const resp = {
      //   responseJSON: { message: 'server error!', error: true },
      //   status
      // }
      // toast.error(resp.responseJSON.message)
      // return resp
    })
}
