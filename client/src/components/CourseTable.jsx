import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, overall, difficulty, standardized, interesting, useful, workload, reviews) {
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

const courses = [
    createData("ECE 201", 0, 0, 0, 0, 0, 0, 0),
    createData("ECE 202", 0, 0, 0, 0, 0, 0, 0),
    createData("ECE 207", 0, 0, 0, 0, 0, 0, 0)
];

export default function CourseTable() {
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
                <StyledTableCell component="th" scope="row" hover={true}>
                  {course.id}
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