import React, { memo } from 'react'

import { Box } from '@material-ui/core'

import StudentsList from 'screens/students/students-list'
import Form from 'screens/students/form'

import useStyles from './students.styles'
import useStudents from './students.hook'

function Students() {
  const classes = useStyles()

  const { list, isLoading } = useStudents()

  console.log('list', list)
  console.log('isLoading', isLoading)

  return (
    <Box className={classes.studentsContainer}>
      <Form />
      <StudentsList />
    </Box>
  )
}

export default memo(Students)
