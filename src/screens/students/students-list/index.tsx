import React, { memo, Fragment } from 'react'

import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'

import { IStudent } from 'types'
import NoContent from 'components/no-content'
import Loader from 'components/loader'
import { student as studentsConst } from 'app-constants'

import useStyles from './students-list.styles'

interface IProps {
  list: IStudent[]
  isLoading: boolean
}

function StudentsList({ list, isLoading }: IProps) {
  const classes = useStyles()

  const hasItems: boolean = list && list.length > 0

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : hasItems ? (
        <Box className={classes.studentsListContainer}>
          <Box m={3} className={classes.titleContainer}>
            <Typography className={classes.title} variant="h4">Students</Typography>
          </Box>
          <Box className={classes.tableContainer}>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead className={classes.head}>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Last Name</TableCell>
                  <TableCell align="center">Level</TableCell>
                  <TableCell align="center">Address</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list.map((student, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">
                      {student.name}
                    </TableCell>
                    <TableCell align="center">{student.lastname}</TableCell>
                    <TableCell align="center">{studentsConst.level[student.level]}</TableCell>
                    <TableCell align="center">{student.address}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        </Box>
      ) : (
        <NoContent />
      )}
    </Fragment>
  )
}

export default memo(StudentsList)
