import { makeStyles, StyleRules, Theme } from '@material-ui/core'

const useStyles = makeStyles(
  (theme: Theme): StyleRules => ({
    noContentIcon: {
      fontSize: '60px'
    },
  }),
)

export default useStyles
