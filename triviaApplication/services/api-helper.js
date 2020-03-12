import axios from 'axios';
import { AsyncStorage } from 'react-native'

const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  AsyncStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  // AsyncStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}
export const readAllUnits = async () => {
  const resp = await api.get('/units')
  return resp.data
}
export const readAllCategories = async () => {
  const resp = await api.get('/categories')
  return resp.data
}
export const getQuestionsByCatId = async () => {
  const resp = await api.get('/categories/cat_id')
  return resp.data
}

export const verifyUser = async () => {
  const token = await AsyncStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}
