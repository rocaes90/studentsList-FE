import { Note } from './INote'
import { AppContext } from './IAppContext'
import { Student, StudentState, GetStudentsResponse } from './IStudent'
import { Helpers, Injections } from './IStoreConfig'
import { APIResponse, APIResponseList } from './IAPIResponse'
import { OnChangeInputProps } from './IForm'

export type INote = Note
export type IAppContext = AppContext

export type IAPIResponse<T> = APIResponse<T>
export type IAPIResponseList = APIResponseList
export type IHelpers<T extends object> = Helpers<T>
export type IInjections = Injections
export type IStudent = Student
export type IStudentState = StudentState
export type IGetStudentsResponse = GetStudentsResponse
export type IOnChangeInputProps = OnChangeInputProps
