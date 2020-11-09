import axios from 'axios'

import { API_URL } from 'app-constants'

const baseURL = API_URL

const apiServiceClient = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

apiServiceClient.interceptors.response.use(
  (response: any): any => {
    return { status: response.status, data: response.data }
  },
  (error: any): any => {
    console.log('error', error)
  },
)

export { apiServiceClient, baseURL }