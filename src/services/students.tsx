import {
  IStudent,
  IAPIResponse,
  IGetStudentsResponse,
} from 'types'

import { apiServiceClient } from './api-config'

const ENDPOINT = '/student'

async function getStudents(): Promise<IGetStudentsResponse> {
  const response = await apiServiceClient.get(
    ENDPOINT,
  )
    
  console.log('end get students', response)
  return response
}

async function createStudent(
  body: IStudent,
): Promise<IAPIResponse<IStudent>> {
  const response: IAPIResponse<IStudent> = await apiServiceClient.post(
    ENDPOINT,
    body,
  )
  return response
}

export {
  getStudents,
  createStudent,
}