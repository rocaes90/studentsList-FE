import React, { memo } from 'react'

import { Box } from '@material-ui/core'

import StudentsList from 'screens/students/students-list'
import Form from 'screens/students/form'

import useStyles from './students.styles'
import useStudents from './students.hook'

function Students() {
  const classes = useStyles()

  const { list, isLoading } = useStudents()

  return (
    <Box className={classes.studentsContainer}>
      <Form />
      <StudentsList list={list} isLoading={isLoading} />
    </Box>
  )
}

export default memo(Students)
