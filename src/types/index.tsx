import { Student, StudentState, GetStudentsResponse } from './IStudent'
import { Helpers, Injections } from './IStoreConfig'
import { APIResponse, APIResponseList } from './IAPIResponse'
import { OnChangeInputProps } from './IForm'
import { SelectListOption } from './ISelectListOption'

export type IAPIResponse<T> = APIResponse<T>
export type IAPIResponseList = APIResponseList
export type IHelpers<T extends object> = Helpers<T>
export type IInjections = Injections
export type IStudent = Student
export type IStudentState = StudentState
export type IGetStudentsResponse = GetStudentsResponse
export type IOnChangeInputProps = OnChangeInputProps
export type ISelectListOption = SelectListOption
