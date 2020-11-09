import { thunk, Thunk, thunkOn, ThunkOn } from 'easy-peasy'

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
  >,
  onCreateStudentUpdateStudentsList: ThunkOn<StudentsModel, IInjections>
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
        await injections.createStudent(payload)
        actions.clearStudentsForm()
      } catch (e) {
        console.log('error', e)
      } finally {
        actions.updateStudentsState({ isLoading: false })
      }
    },
  ), 
  onCreateStudentUpdateStudentsList: thunkOn(
    (actions, storeActions) => actions.createStudent,
    async (actions) => {
      try{
        actions.updateStudentsState({ isLoading: true })
        actions.getStudents()
      }
      catch(error) {
        console.log('error', error)
      }
      finally{
        actions.updateStudentsState({ isLoading: false })
      }
    },
  ),
}
export default thunks
