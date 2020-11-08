import * as service from 'services/students'

export interface Student {
  name: string
  lastname: string
  level: number
  address: string
}

export interface StudentState {
  isLoading: boolean
  isSomethingWrong: boolean
  items: {
    list: Student[]
  },
  form: {
    name: string
    lastname: string
    level: number
    address: string
  }
}

export interface GetStudentsResponse {
  data: Student[]
}

export interface StudentsInjections {
  getStudents: typeof service.getStudents
  createStudent: typeof service.createStudent
}