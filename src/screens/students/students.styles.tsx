import { makeStyles, StyleRules, Theme } from '@material-ui/core'

import { Colors } from 'config'

const useStyles = makeStyles(
  (theme: Theme): StyleRules => ({
    studentsContainer: {
      backgroundColor: Colors.stormGray,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      [theme.breakpoints.up('md')]: {
      }
    },
  }),
)

export default useStyles
