import { FETCH_DATA } from './types';
import axios from 'axios';

const apiUrl = 'https://api.github.com/users';

export const fetchData = (data) => {
  return {
    type: FETCH_DATA,
    data
  }
};

export const fetchDeviceData = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchData(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

// export function addDevice(device)
// {
//     return {
//     type:'ADD_DEVICE',
//     payload:device
//     }
// }

// export function deleteDevice(Id)
// {
//     return {
//     type:'DELETE_DEVICE',
//     payload:Id
//     }
// }

// export function updateDevice(device)
// {
//     return {
//         type:'UPDATE_DEVICE',
//         payload:device
//         }

// }