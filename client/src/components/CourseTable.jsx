import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { CourseMap } from './constants';

function createRow(id, overall, difficulty, standardized, interesting, useful, workload, reviews) {
    return {id, overall, difficulty, standardized, interesting, useful, workload, reviews}
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '& .MuiTableRow-root': {
        '&.MuiTableRow-hover': {
            cursor: 'pointer'
        }
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

/*
const courses = [
    createRow("ECE 201", 0, 0, 0, 0, 0, 0, 0),
    createRow("ECE 202", 0, 0, 0, 0, 0, 0, 0),
    createRow("ECE 207", 0, 0, 0, 0, 0, 0, 0)
];
*/
export default function CourseTable({department}) {

    const [courses, setReviews] = useState([])
    const [showReviews, setShowReviews] = useState(false)

    function createData(data, allCourses) {
      let temp = []
      if (Object.keys(data).length !== 0) {
        Object.values(data).forEach(c => { 
          temp.push(createRow(c.course, c.overall, c.difficulty, c.standardized, c.interesting, c.useful, c.workload, c.reviews))
          let idx = allCourses.indexOf(c.course)
          delete allCourses[idx]
      })
      }
      Object.values(allCourses).forEach(course => { 
        temp.push(createRow(course, 0, 0, 0, 0, 0, 0, 0))
      })
      setReviews(temp)
    }

    useEffect(() => {
      fetch('http://localhost:8000/department/' + department)
      .then(response => {
        if (response.status !== 200) {
          createData({}, CourseMap[department])
          return Promise.reject(response)
        }
        return response.json()
      })
      .then(json => createData(json, CourseMap[department]))
      .catch(error => {
        console.log(error)
      })
    }, [department])

    const navigate = useNavigate()

    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="course table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Course</StyledTableCell>
              <StyledTableCell align="right">overall</StyledTableCell>
              <StyledTableCell align="right">difficulty</StyledTableCell>
              <StyledTableCell align="right">standardized</StyledTableCell>
              <StyledTableCell align="right">interesting</StyledTableCell>
              <StyledTableCell align="right">useful</StyledTableCell>
              <StyledTableCell align="right">workload</StyledTableCell>
              <StyledTableCell align="right">reviews</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => (
              <StyledTableRow
                key={course.id}
                onClick={() => navigate(`course/${course.id}`)}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              > 
                <StyledTableCell component="th" scope="row">
                  {course.id.replace(/(\D)(\d)/g, '$1 $2')}
                </StyledTableCell>
                <StyledTableCell align="right">{course.overall}</StyledTableCell>
                <StyledTableCell align="right">{course.difficulty}</StyledTableCell>
                <StyledTableCell align="right">{course.standardized}</StyledTableCell>
                <StyledTableCell align="right">{course.interesting}</StyledTableCell>
                <StyledTableCell align="right">{course.useful}</StyledTableCell>
                <StyledTableCell align="right">{course.workload}</StyledTableCell>
                <StyledTableCell align="right">{course.reviews}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }