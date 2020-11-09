import { makeStyles, StyleRules, Theme } from '@material-ui/core'
import { Colors } from 'config'


const useStyles = makeStyles(
  (theme: Theme): StyleRules => ({
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '40%',
      minWidth: '400px',
      backgroundColor: Colors.athensGray,
    },
    inputForm: {
      backgroundColor: Colors.white,
      marginTop: theme.spacing(2),
      textAlign: 'left'
    },
    title: {
      color: Colors.black,
      margin: theme.spacing(1)
    }
  }),
)

export default useStyles
