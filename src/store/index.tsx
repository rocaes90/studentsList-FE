import { createStore, createTypedHooks, Actions, State } from 'easy-peasy'

import ApiService from 'services'
import students, { StudentsModel } from './students/model'

export interface AppStoreModel {
  students: StudentsModel
}

export const appStoreModel: AppStoreModel = {
  students
}

const { useStoreActions, useStoreState } = createTypedHooks<AppStoreModel>()

const store = createStore(appStoreModel, {
  disableImmer: true,
  injections: ApiService
})

export type IStateModel = State<AppStoreModel>
export type IActionModel = Actions<AppStoreModel>
export { useStoreActions, useStoreState }

export default store
