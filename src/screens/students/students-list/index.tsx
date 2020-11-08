import React, { memo } from 'react'

import { Box, Typography } from '@material-ui/core'

import useStyles from './students-list.styles'

function StudentsList() {
  const classes = useStyles()

  return (
    <Box className={classes.studentsListContainer}>
      <Typography>Students List</Typography>
      
    </Box>
  )
}

export default memo(StudentsList)
