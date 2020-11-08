import { ChangeEvent, KeyboardEvent, useCallback, useContext, useEffect, useState } from 'react'

import { useStoreActions, useStoreState } from 'easy-peasy'
import shallowEqual from 'shallowequal'

import { IStudent, IOnChangeInputProps } from 'types'
import { IStateModel, IActionModel } from 'store'

import ActiveNoteContext from 'context/activeNote'

interface IType {
  formValues: IStudent | undefined

  onCreateStudent(): void
  onChangeInput({inputToUpdate, valueToInsert}: IOnChangeInputProps): void
}

interface IMapStateToProps {
  form: IStudent
}

const studentObj: IStudent = {
  name: 'Jose',
  lastname: 'Vargas22',
  level: 3,
  address: 'Costa Rica'
}

function useForm(): IType {

  const { form: formValuesStore } = useStoreState(
    ({ students }: IStateModel): IMapStateToProps => ({
      form: students.form,
    }),
    shallowEqual,
  )

  const [formValues, setFormValues] = useState<IStudent>()

  const actions = useStoreActions((actions: IActionModel) => actions.students)

  const onCreateStudent = (): void => {
    console.log('click on create')
    actions.createStudent(formValuesStore)
  }

  const onChangeInput = ({inputToUpdate, valueToInsert}: IOnChangeInputProps): void => {
    actions.updateStudentsForm({
      ...formValues, 
      [inputToUpdate]: valueToInsert
    })
  }

  useEffect((): void => {
    setFormValues({...formValuesStore})
  }, 
  [formValuesStore])

  return { 
    formValues,
    onCreateStudent,
    onChangeInput,
  }
}

export default useForm
