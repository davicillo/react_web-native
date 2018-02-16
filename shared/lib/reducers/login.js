import { LOGIN_SUCCESS, LOGIN_ERROR,
        LOG_OUT } from '../actions/login';


const initialState = {
    logedIn: false,
    user: {}
}

const handlers = {
    /**
     * @param {object} Partial State
     * @param {object} Action
     */
    [LOGIN_SUCCESS]: (state, { response }) => {
      const {
        returnCode, returnMessage, user
      } = response;

      if(returnCode == 0){
          return {
              logedIn: true,
              user: user
          }
      }
      else{
          return {
              logedIn: false,
              loginError: returnMessage
          }
      }
    },
    [LOGIN_ERROR]: (state, { error }) => {
        const {
          returnCode, returnMessage, user
        } = error;
        return {
            logedIn: false,
            loginError: returnMessage
        }
    },
    [LOG_OUT]: (state, { response }) => {
        const {
          returnCode, returnMessage
        } = response;
        return {
            logedIn: false,
            loginError: returnMessage
        }
    },
  };
  
  /**
   * Default reducer.
   *
   * @function
   * @default
   * @export
   */
  export default (state = initialState, action) =>
    (handlers[action.type] ? handlers[action.type](state, action) : state);