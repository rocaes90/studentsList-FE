import React, { memo } from 'react'

import { Box, Typography } from '@material-ui/core'
import { NotInterested } from '@material-ui/icons'

import useStyles from './no-content.styles'

function NoContent() {
  const classes = useStyles()
  
  return (
    <Box p={5} width='100%' display='flex' flexDirection='column' alignItems="center">
      <Box mb={2} >
        <NotInterested className={classes.noContentIcon} />
      </Box>
      <Typography variant="h5">No Content To Display</Typography>
    </Box>
  )
}

export default memo(NoContent)
