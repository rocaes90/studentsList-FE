import React, { ChangeEvent, memo } from 'react'

import { Box, Typography, Button, TextField } from '@material-ui/core'

import useStyles from './form.styles'
import useForm from './form.hook'
import { IOnChangeInputProps } from 'types'

function Form() {
  const classes = useStyles()
  const { onCreateStudent, onChangeInput, formValues } = useForm()

  const createStudentCallback = () => {
    onCreateStudent() 
  }

  const onChangeInputCallback = (event: ChangeEvent<any>) => {
    const { name, value } = event.target
    onChangeInput({
      inputToUpdate: name, 
      valueToInsert: value
    }) 
  }

  return (
    <Box className={classes.formContainer}>
      <Typography>Form</Typography>
      <TextField
        name="name"
        value={formValues && formValues['name']}
        onChange={onChangeInputCallback}
        fullWidth={true}
        label="Name"
        variant="outlined"
      />
      <TextField
        name="lastname"
        value={formValues && formValues['lastname']}
        onChange={onChangeInputCallback}
        fullWidth={true}
        label="LastName"
        variant="outlined"
      />
      <TextField
        name="address"
        value={formValues && formValues['address']}
        onChange={onChangeInputCallback}
        fullWidth={true}
        label="Address"
        variant="outlined"
      />
      <Button onClick={createStudentCallback}>ADD STUDENT</Button>
    </Box>
  )
}

export default memo(Form)
