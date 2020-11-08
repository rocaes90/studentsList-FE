import { thunk, Thunk } from 'easy-peasy'

import { AppStoreModel } from 'store'
import { IStudent, IInjections, IGetStudentsResponse } from 'types'

import { StudentsModel } from './model'

export interface IThunks {
  getStudents: Thunk<
    StudentsModel,
    void,
    IInjections
  >,
  createStudent: Thunk<
    StudentsModel,
    IStudent,
    IInjections
  >
}

const thunks: IThunks = {
  getStudents: thunk(
    async (
      actions,
      _,
      { injections },
    ): Promise<void> => {
      try {
        actions.updateStudentsState({ isLoading: true })
        const { data }: IGetStudentsResponse = await injections.getStudents()
        const listData = data || []
        actions.updateStudentsList({list: listData})
      } catch (e) {
        console.log('error', e)
      } finally {
        actions.updateStudentsState({ isLoading: false })
      }
    },
  ),
  createStudent: thunk(
    async(
      actions, 
      payload,
      { injections },
    ): Promise<void> => {
      try {
        const test: any = await injections.createStudent(payload)
        console.log('test', test)
      } catch (e) {
        console.log('error', e)
      } finally {
        actions.updateStudentsState({ isLoading: false })
      }
    },
  )
}
export default thunks
