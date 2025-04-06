import axios from 'axios'
import type { AxiosInstance } from 'axios'
import config from '@/config'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: config.API_HOST,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use((req) => {
  const accessToken = localStorage.getItem('access_token')
  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`
  }
  return req
})

export default axiosInstance
