import * as TYPES from './actiontypes';

/*
Action Creators
*/

export function changeAppRoot(root) {
  return {
    type: TYPES.ROOT_CHANGED,
    root: root
  };
}

export function appInitialized() {
  return async function(dispatch, getState) {
    dispatch(changeAppRoot('login'));
  };
}

export function login() {
  return async function(dispatch, getState) {
    dispatch(changeAppRoot('after-login'));
  };
}

