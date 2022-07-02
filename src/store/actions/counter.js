import { mapStudioDataToStore, mapEditorDataToStore } from './actions'

/**
 * This function will dispatch the data to TableData in redux Store.
 * @param {Object} data this is the data that will be sent to the redux store
 * @returns data to redux store
 */
export function sendGlobalDataToStore(data) {
  return function (dispatch) {
    setTimeout(function () {
      dispatch(mapStudioDataToStore(data))
    }, 1);
  }
}

// export function sendEditorDataToStore(data) {
//   return function (dispatch) {
//     setTimeout(function () {
//       dispatch(mapEditorDataToStore(data))
//     }, 1);
//   }
// }