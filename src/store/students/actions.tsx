import { action, Action } from 'easy-peasy'

import { IStudent, IStudentState } from 'types'

import { initialState, StudentsModel } from './model'

export interface IActions {
  resetStore: Action<StudentsModel>
  updateStudentsState: Action<StudentsModel, Partial<IStudentState>>
  updateStudentsList: Action<StudentsModel, Partial<IStudentState['items']>>
  updateStudentsForm: Action<StudentsModel, Partial<IStudent>>
  clearStudentsForm: Action<StudentsModel>
}

const actions: IActions = {
  resetStore: action(() => ({ ...initialState })),
  updateStudentsState: action((state, payload) => ({
    ...state,
    ...payload,
  })),
  updateStudentsList: action((state, payload) => ({
    ...state,
    items: {
      ...state.items,
      ...payload,
    },
  })),
  updateStudentsForm: action((state, payload) => ({
    ...state,
    form: {
      ...state.form,
      ...payload,
    },
  })),
  clearStudentsForm: action((state, payload) => ({
    ...state,
    form: {
      ...initialState.form
    },
  })),
}

export default actions
