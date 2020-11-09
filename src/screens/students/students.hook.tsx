import { useEffect } from 'react'

import { useStoreActions, useStoreState } from 'easy-peasy'
import shallowEqual from 'shallowequal'

import { IStudent } from 'types'
import { IStateModel, IActionModel } from 'store'

interface IType {
  list: IStudent[],
  isLoading: boolean
}

interface IMapStateToProps {
  isSomethingWrong: boolean
  isLoading: boolean
  list: IStudent[]
}

function useStudents(): IType {

  const { isLoading, list } = useStoreState(
    ({ students }: IStateModel): IMapStateToProps => ({
      isSomethingWrong: students.isSomethingWrong,
      isLoading: students.isLoading,
      list: students.items.list,
    }),
    shallowEqual,
  )

  const actions = useStoreActions((actions: IActionModel) => actions.students)

  useEffect(() => {
    actions.getStudents()
  }, [actions])

  return { 
    list, 
    isLoading,
  }
}

export default useStudents
