export const saveUser = (user: any) => ({
  type: 'SAVE_USER',
  payload: user
})
export const getUserId = (userId: string) => ({
  type: 'GET_USER_ID',
  payload: userId
})

export const logOut = () => ({
  type: 'LOG_OUT',
  payload: undefined
})
