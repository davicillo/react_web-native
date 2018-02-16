// module.exports = {
//     get Title() {
//       return require('./Title').default;
//     },
//   };
import LoginConstants from './constants/login/login';
import Login from './components/login/Login';
export * from './actions';
export { default as reducers } from './reducers';

export const Components ={
  Login: Login
}

export const Constants ={
  Login: LoginConstants
}



