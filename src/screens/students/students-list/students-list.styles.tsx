import { makeStyles, StyleRules, Theme } from '@material-ui/core'
import { Colors } from 'config'

const useStyles = makeStyles(
  (theme: Theme): StyleRules => ({
    studentsListContainer: {
      display: 'flex',
      flexDirection: 'column',

    },
    table: {
      minWidth: 850,
      backgroundColor: Colors.athensGray,
      paddingTop: theme.spacing(4),
      '& tr:nth-child(even)': {
        background: Colors.silver
      }
    },
    title: {
      color: Colors.white
    },
    titleContainer: {
      paddingTop: theme.spacing(4)
    },
    head: {
      background: Colors.midGray,
      '& th ' : {
        color: Colors.white
      }
    }
  }),
)

export default useStyles
