import React, { ChangeEvent, memo } from 'react'

import { Box, Typography, Button, TextField, Select, MenuItem } from '@material-ui/core'

import { student } from 'app-constants'
import { ISelectListOption } from 'types'

import useStyles from './form.styles'
import useForm from './form.hook'

function Form() {
  const classes = useStyles()

  const { onCreateStudent, onChangeValue, formValues } = useForm()

  const createStudentCallback = () => {
    onCreateStudent() 
  }

  const onChangeValueCallback = (event: ChangeEvent<any>) => {
    const { name, value } = event.target
    onChangeValue({
      inputToUpdate: name, 
      valueToInsert: value
    }) 
  }

  const nameValue = (formValues && formValues['name']) || ''
  const lastnameValue = (formValues && formValues['lastname']) || ''
  const addressValue = (formValues && formValues['address']) || ''
  const levelValue = (formValues && formValues['level']) || 1

  return (
    <Box borderRadius={3} p={1} className={classes.formContainer}>
      <Typography className={classes.title} variant="h4">Student Information</Typography>
        <TextField
          name="name"
          value={nameValue}
          onChange={onChangeValueCallback}
          fullWidth={true}
          label="Name"
          variant="outlined"
          className={classes.inputForm}
        />
        <TextField
          name="lastname"
          value={lastnameValue}
          onChange={onChangeValueCallback}
          fullWidth={true}
          label="Last Name"
          variant="outlined"
          className={classes.inputForm}
        />
        <Select
          name="level"
          className={classes.inputForm}
          inputProps={{
            'aria-label': 'Level',
          }}
          labelId="level-student"
          onChange={onChangeValueCallback}
          value={levelValue}
          variant="outlined"
        >
          {student.levelSelector.map((option: ISelectListOption): any => (
            <MenuItem key={option['value']} value={option['value']}>
              {option['label']}
            </MenuItem>
          ))}
        </Select>
        <TextField
          name="address"
          value={addressValue}
          onChange={onChangeValueCallback}
          fullWidth={true}
          label="Address"
          variant="outlined"
          className={classes.inputForm}
        />
      <Box m={2}>
        <Button 
          variant="contained" 
          onClick={createStudentCallback}>
            ADD STUDENT
        </Button>
      </Box>
    </Box>
  )
}

export default memo(Form)
