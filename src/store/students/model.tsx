import { IStudentState } from 'types'

import actions, { IActions } from './actions'
import thunks, { IThunks } from './thunks'

export interface StudentsModel extends IActions, IThunks, IStudentState {}

export const initialState: IStudentState = {
  isLoading: false,
  isSomethingWrong: false,
  items: {
    list: []
  },
  form: {
    name: '',
    lastname: '',
    level: 1,
    address: ''
  }
}

const faqs: StudentsModel = {
  ...actions,
  ...initialState,
  ...thunks,
}

export default faqs
