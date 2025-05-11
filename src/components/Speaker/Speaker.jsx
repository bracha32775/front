import { useEffect } from 'react';
import { getSpeakersThunk } from '../../redux/Thunks/getSpeakersThunk';
import { useDispatch, useSelector } from "react-redux";
import { AddSpeaker } from '../Add/AddSpeaker/AddSpeaker';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Routing } from '../Routing/Routing'
import * as React from 'react';
import './Speaker.css'
import { DeleteForever } from '@mui/icons-material';
import { Box, Chip, FormControl, Input, InputBase, InputLabel, MenuItem, Select, TableCell, TableRow, TextField, Typography } from '@mui/material';
import { deleteSpeakerThunk } from '../../redux/Thunks/deleteSpeakerThunk';
import { getBySpeakerNameThunk } from '../../redux/Thunks/getBySpeakerNameThunk';
import { InputOutlined } from '@mui/icons-material';
import { InputRounded } from '@mui/icons-material';
import SpeakersTable from './speakersTable';
import { setFlagSpeakerSlice } from '../../redux/Slices/speakersSlice';
import { SchoolOutlined } from '@mui/icons-material';

export const Speaker = () => {
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(3),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(3),
    },
  }));
  const dispatch = useDispatch()
  const speakers = useSelector(state => state.speakers.allSpeakers);
  const speaker = useSelector(state => state.speakers.selectSpeaker);
  const flagClose = useSelector(state => state.speakers.flagClose);
  const [flagClose2, setFlagClose2] = React.useState(flagClose)
  const [id, setId] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [flag, setFlag] = React.useState(false);
  const [flag2, setFlag2] = React.useState(false);
  const [flag4, setFlag4] = React.useState(false);
  const [f, setF] = React.useState(-1);
  const [flagDeletedSpeaker, setFlagDeletedSpeaker] = React.useState(false);
  const [deletedSpeaker, setDeletedSpeaker] = React.useState("");
  const [checkedSpeaker, setCheckedSpeaker] = React.useState();
  useEffect(() => {
    doIt()
  }, [])
  async function doIt() {
    dispatch(getSpeakersThunk())
  }

  const handleClickOpen = () => {
    setOpen(true);
    dispatch(setFlagSpeakerSlice(false))
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
    setFlagClose2(false)
  };
  async function openDivDetailes(index) {
    setFlag(true)
    setF(index)
  }
  const Close = () => {
    setFlag(false);
  };
  const Close2 = () => {
    setFlag2(false);
  };
  // const checkingDeletedSpeaker = () => {
  //   debugger
  //   if (deletedSpeaker != null)
  //     setFlagDeletedSpeaker(true)
  // };
  const deleteSpeaker = async () => {
    // if (deletedSpeaker == checkedSpeaker) {
    const tempSpeaker = await dispatch(getBySpeakerNameThunk(deletedSpeaker))
    console.log(deletedSpeaker);
    setId(tempSpeaker.payload.idOfSpeaker)
    //let red = dispatch(getBySpeakerNameThunk(deletedSpeaker))
    //console.log(id+"vvvvvvvvvvvvvvvvvvvv");
    debugger
    dispatch(deleteSpeakerThunk(tempSpeaker.payload.idOfSpeaker))
    console.log("tempSpeaker.payload.idOfSpeaker"+tempSpeaker.payload.idOfSpeaker);
    setFlag4(true)
    //}
  };
  const whatsGoing = (name2) => {
    console.log(name2 + "name2");
    setDeletedSpeaker(name2)
  };

  return <div>

    <SpeakersTable></SpeakersTable>
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}
        align='center'>
        הוספת מרצה
        <AddIcon ></AddIcon>
      </Button>
      {!flagClose && <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          id="customized-dialog-title">
          הוספת מרצה
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
          <AddSpeaker />
        </DialogContent >
      </BootstrapDialog>}
    </React.Fragment>

    <>{flag && <React.Fragment>
      <BootstrapDialog
        open={flag}
        aria-labelledby="customized-dialog-title">
        <DialogTitle
          id="customized-dialog-title">
          {speakers[f].courses.map(v => v.nameOfCourse)}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={Close}
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
          <td>{speakers[f].courses.map(v => v.map(x =>
            <><td>{x.nameOfCourse}</td>
              <td>{x.amountOfStudentsInCourse}</td>
              <td>{x.startDateOfCourse}</td></>
          ))}</td>
        </DialogContent >
      </BootstrapDialog>
    </React.Fragment>
    }
    </>


    {/* [===delete====] */}
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen2}
        align='center'
      >
        מחיקת מרצה
        <DeleteForever />
      </Button>
      <BootstrapDialog
        onClose={handleClose2}
        aria-labelledby="customized-dialog-title"
        open={open2}
      >
        <DialogTitle
          id="customized-dialog-title">
          מחיקת מרצה
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose2}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[30],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>

          
        <Box className="select" sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">מרצה </InputLabel>
        <Select
         onChange={(e) => whatsGoing(e.target.value)}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="מרצה "
          className="tool"
          defaultValue={""}
        >
          {speakers.map(speaker => {
            return <MenuItem key={speaker.idOfSpeaker} value={speaker.nameOfSpeaker}>
              {speaker.nameOfSpeaker} </MenuItem>
          })}
        </Select>
      </FormControl>
    </Box>
          {/* <Box className="select" sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">מרצה </InputLabel>
              <Select
               
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // defaultValue={""}
                label="מרצה "
                className="tool"

              >
                {speakers.map(speaker => {
                  return <MenuItem key={speaker.idOfSpeaker} value={speaker.nameOfSpeaker}

                  >{speaker.nameOfSpeaker}</MenuItem>

                })
                }

              </Select>
            </FormControl>
          </Box> */}
          <br />
          {/* <>{flagDeletedSpeaker && <><div>
            <input id="outlined-basic" placeholder=' הקלידי את שם המרצה' 
              className="input" onChange={(x) => setCheckedSpeaker(x.target.value)}
            />
          </div><Button
            onClick={() =>deleteSpeaker ()}
          >o.k</Button></>}</> */}

          {/* {!flagDeletedSpeaker && <Button
            onClick={() =>checkingDeletedSpeaker ()}
          >o.kk</Button>} */}
          <Button
            onClick={() => deleteSpeaker()}
          >o.k</Button>
        </DialogContent >
      </BootstrapDialog>
    </React.Fragment>

    <>{flag2 && <React.Fragment>
      <BootstrapDialog
        open={flag2}
        aria-labelledby="customized-dialog-title">
        <DialogTitle
          id="customized-dialog-title">
          {/* {speakers[f].courses.map(v => v.nameOfCourse)} */}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={Close2}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[30],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>


          {/* <td>{speakers[f].courses.map(v => v.map(x =>
            <><td>{x.nameOfCourse}</td>
              <td>{x.amountOfStudentsInCourse}</td>
              <td>{x.startDateOfCourse}</td></>
          ))}</td> */}
        </DialogContent >
      </BootstrapDialog>
    </React.Fragment>
    }
    </>
  </div>
}





