import { useCallback, useEffect, useState } from 'react'

import { useStoreActions, useStoreState } from 'easy-peasy'
import shallowEqual from 'shallowequal'

import { IStudent, IOnChangeInputProps } from 'types'
import { IStateModel, IActionModel } from 'store'

interface IType {
  formValues: IStudent | undefined

  onCreateStudent(): void
  onChangeValue({inputToUpdate, valueToInsert}: IOnChangeInputProps): void
}

interface IMapStateToProps {
  form: IStudent
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

  const onCreateStudent = useCallback((): void => {
    actions.createStudent(formValuesStore)
  }, [formValuesStore, actions])

  const onChangeValue = useCallback(({inputToUpdate, valueToInsert}: IOnChangeInputProps): void => {
    actions.updateStudentsForm({
      ...formValues, 
      [inputToUpdate]: valueToInsert
    })
  }, 
  [formValues, actions])

  useEffect((): void => {
    setFormValues({...formValuesStore})
  }, 
  [formValuesStore])

  return { 
    formValues,
    onCreateStudent,
    onChangeValue,
  }
}

export default useForm
