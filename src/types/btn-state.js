import { config } from '../data/config'
export const BUTTON_STATE = {
  LOADED: 'RELOAD',
  LOADING: 'LOADING',
  LOADED_AND_DELAYING: `WAIT ${config.todos.loadedAndDelaying} SECS`,
  ERROR: 'LOAD ERROR.RETRY',
}
