
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getStudentsThunk } from '../redux/Thunks/getStudentsThunk';

export const Supplier = () =>{
const schools = useSelector(s => s.students.students)
console.log("school  --",schools);
const dispatch=useDispatch()

const getData=async()=>{
       await dispatch(getStudentsThunk())
    }
    
useEffect(()=>{
    getData()
},[])

    return <>


   {
            <TableContainer component={Paper} sx={{width:"50%",height:"auto"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>מספר עסק מורשה</TableCell>
            <TableCell align="right">שם ספק</TableCell>
            <TableCell align="right">פרטי בנק</TableCell>
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell> */}
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {schools.map((sc) => (
            <TableRow
              key={sc.licensedNum}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {sc.licensedNum}
              </TableCell>
               <TableCell align="right">{sc.supplierName}</TableCell>
              <TableCell align="right">{sc.bankCode}</TableCell>
              {/* <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>}
    </>
}