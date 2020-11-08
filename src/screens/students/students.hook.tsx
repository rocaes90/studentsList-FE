import { ChangeEvent, KeyboardEvent, useCallback, useContext, useEffect, useState } from 'react'

import { useStoreActions, useStoreState } from 'easy-peasy'
import shallowEqual from 'shallowequal'

import { IStudent } from 'types'
import { IStateModel, IActionModel } from 'store'

import ActiveNoteContext from 'context/activeNote'

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

  const { isSomethingWrong, isLoading, list } = useStoreState(
    ({ students }: IStateModel): IMapStateToProps => ({
      isSomethingWrong: students.isSomethingWrong,
      isLoading: students.isLoading,
      list: students.items.list,
    }),
    shallowEqual,
  )

  const actions = useStoreActions((actions: IActionModel) => actions.students)

  useEffect(() => {
    console.log('action in view')
    actions.getStudents()
  }, [actions])

  return { 
    list, 
    isLoading,
  }
}

export default useStudents
