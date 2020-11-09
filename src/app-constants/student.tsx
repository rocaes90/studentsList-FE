import { ISelectListOption } from 'types'

export enum level {
  PRIMARY = 1,
  HIGHSCHOOL = 2,
  UNIVERSITY = 3,
}

export const levelSelector: ISelectListOption[] = [
  {
    label: 'Primary',
    value: level.PRIMARY,
  },
  {
    label: 'High School',
    value: level.HIGHSCHOOL,
  },
  {
    label: 'University',
    value: level.UNIVERSITY,
  },
]
