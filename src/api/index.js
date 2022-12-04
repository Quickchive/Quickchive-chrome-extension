import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  return axios.create({
    baseURL: `https://test.hou27.shop/api/`,
  });
}

function createInstanceWithAuth() {
  const instance = axios.create({
    baseURL: `https://test.hou27.shop/api/`,
  });
  return setInterceptors(instance);
}

export const instance = createInstance();
export const authInstance = createInstanceWithAuth();
