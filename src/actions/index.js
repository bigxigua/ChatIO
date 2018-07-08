import * as TYPES from './actiontypes'
import io from 'socket.io-client'
import { DEFAULT_URL } from '../config/socket-config'

export const socket = io(DEFAULT_URL, {
  'force new connection': true
});

export function changeState(TYPE, info) {
  return {
    type: TYPE,
    info
  }
}

//获取房间列表
export const getRoomLists = (token) => {
  // return async function (dispatch) {
  //   // const result = await socket.emit('getRoomLists', token, async () => {
  //   //
  //   // });
  //   // console.log(result, '--------')
  //   // if (!result.isError) {
  //   //   dispatch(changeState(TYPES.GET_ROOM_LISTS, result.userRoomLists));
  //   //   // dispatch(getAllRoomHistories(body.histories))
  //   // }
  //   return ()
  // }
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      socket.emit('getRoomLists', token, (body) => {
        console.log(body)
        if (!body.isError) {
          dispatch(changeState(TYPES.GET_ROOM_LISTS, result.userRoomLists))
          // dispatch(getAllRoomHistories(body.histories))
        }
        body.isError ? (reject(body)) : (resolve(body))
      })
    })
  }
};
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

