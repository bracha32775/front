// 
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getStudentsThunk } from '../../redux/Thunks/getStudentsThunk';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Routing } from '../Routing/Routing'
import { useNavigate } from 'react-router-dom';
import { AddStudent } from '../Add/AddStudent/AddStudent'
import { useState } from "react";
import * as React from 'react';
import './Student.css'
import EnhancedTable from './studentTable';
import { setFlagStudentSlice } from '../../redux/Slices/studentSlice';

export const Student = () => {
  const flagClose = useSelector(state => state.students.flagClose);
  const nav = useNavigate()
  const dispatch = useDispatch()
  const students = useSelector(state => state.students.students);
  const [open, setOpen] = React.useState(false);
  //;setOpen(useSelector(state => state.students.open))
  const [flag, setFlag] = useState()
  async function doIt() {
    await dispatch(getStudentsThunk())
  }
  
  useEffect(() => {
    doIt()
  }, [])

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(3),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(3),
    },
  }));



  const handleClickOpen = () => {
    setOpen(true);
    dispatch(setFlagStudentSlice(false))
  };
  const handleClose = () => {
    setOpen(false);

  };

  return <div>
    <Routing></Routing>
    {/* <p className='pTeachers'>נבחרת התלמידות שלנו</p>
    <table>
      <thead>
        <tr >
          <td className='cotarot'>שם</td>
          <td className='cotarot'>מספר טלפון כרגע</td>
          <td className='cotarot'>כתובת(זמננננננני)</td>
        </tr></thead>
      <tbody>

        {students.map(x => {
          return <tr >
            <td className='tochen'>{x.nameOfStudent}</td>
            <td className='tochen'>{x.phoneOfStudent}</td>
            <td className='tochen'>{x.addressOfStudent}</td>
          </tr>
        })}
      </tbody>
    </table> */}
    <EnhancedTable></EnhancedTable>
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        הוספת תלמידה
        <AddIcon ></AddIcon>
      </Button>
      {!flagClose && <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          id="customized-dialog-title">
          הוספת תלמידה
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[60],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <AddStudent></AddStudent>
        </DialogContent >
      </BootstrapDialog>}
    </React.Fragment>
  </div>
}









