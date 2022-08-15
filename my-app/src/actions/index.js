import api from "../api/api"


export const getUserList = () => async dispatch => {
  const response = await api.get('/db');

  dispatch ({type: 'GET_DATA', payload: response.data.data });
}

