import { FETCH_DATA } from '../actions/types';

export default function Reducer(state = [], action) {
  switch (action.type) {
      case FETCH_DATA:
      return action.data;


  case 'ADD_DEVICE':
      let stateCopy = [...state,action.payload];
      localStorage.setItem('devices',JSON.stringify(stateCopy));
      return stateCopy
  
  case 'DELETE_DEVICE':
      stateCopy = state.filter( x => x.id !== action.payload);
      localStorage.setItem('devices',JSON.stringify(stateCopy));
      return stateCopy
         
case 'UPDATE_DEVICE':
      stateCopy = state.map((device) => {
      const {id,name,temperature,humidity} = action.payload;
      if(device.id === id)
      {
        device.name = name;
        device.temperature = temperature;
        device.humidity = humidity;
      }
      return device;
  })
  localStorage.setItem('devices',JSON.stringify(stateCopy));
  return stateCopy
    default:
      return state;
  }
}