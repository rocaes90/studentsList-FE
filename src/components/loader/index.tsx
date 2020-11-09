import React, { memo, ReactElement } from 'react'

import { Box, CircularProgress } from '@material-ui/core'

import useStyles from './loader.styles'

function Loader(props: any): ReactElement {
  const classes = useStyles()

  return (
    <Box className={classes.centerContent} position="absolute">
      <CircularProgress {...props} />
    </Box>
  )
}

export default memo(Loader)
