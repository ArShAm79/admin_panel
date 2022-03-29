export const saveUser = (token: string) => ({
  type: 'SAVE_USER',
  payload: token
})
export const getUserId = (userId: string) => ({
  type: 'GET_USER_ID',
  payload: userId
})

export const logOut = () => ({
  type: 'LOG_OUT',
  payload: undefined
})
