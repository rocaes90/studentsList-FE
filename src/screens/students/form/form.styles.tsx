import { makeStyles, StyleRules, Theme } from '@material-ui/core'

const useStyles = makeStyles(
  (theme: Theme): StyleRules => ({
    formContainer: {
      display: 'flex',
      width: '100%',
      height: '100vh',
      [theme.breakpoints.up('md')]: {
        overflow: 'hidden',
      }
    },
  }),
)

export default useStyles
