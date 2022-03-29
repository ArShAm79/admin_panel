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
        token: action.payload
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
