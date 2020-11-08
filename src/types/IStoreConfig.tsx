import { Action, Actions, Dispatch, Meta, State } from 'easy-peasy'

import { IStateModel } from 'store'
import { StudentsInjections } from './IStudent'

export interface Injections
  extends StudentsInjections {}

export interface Helpers<T extends object> {
  dispatch: Dispatch<IStateModel>
  injections: Injections
  meta: Meta

  getState(): State<T>
  getStoreActions(): Actions<IStateModel>
  getStoreState(): State<IStateModel>
}
