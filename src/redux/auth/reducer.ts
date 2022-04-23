const INIT_STATE = {
  user: '',
  role: '',
  token: undefined
}
// eslint-disable-next-line @typescript-eslint/default-param-last
export default function authReducer(state = INIT_STATE, action: any) {
  switch (action.type) {
    case 'SAVE_USER':
      return {
        ...state,
        role: action.payload.role.permissions[0].role,
        token: action.payload.token.access_token
      }
    case 'LOG_OUT':
      return {
        user: '',
        role: '',
        token: undefined
      }
    default:
      return state
  }
}
