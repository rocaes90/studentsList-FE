import { makeStyles, StyleRules, Theme } from '@material-ui/core'

const useStyles = makeStyles(
  (theme: Theme): StyleRules => ({
    centerContent: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }),
)

export default useStyles
