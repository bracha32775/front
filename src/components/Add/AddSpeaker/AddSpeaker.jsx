import { useDispatch, useSelector } from "react-redux";
import { addSpeakerThunk } from "../../../redux/Thunks/addSpeakerThunk";
import { useState } from "react";
import Fab from '@mui/material/Fab';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import './AddSpeaker.css'
import TextField from '@mui/material/TextField';
import { setFlagSpeakerSlice } from "../../../redux/Slices/speakersSlice";
export const AddSpeaker = () => {
    const dispatch = useDispatch()
    const speakers = useSelector(state => state.speakers.speakers);
    const [speaker, setSpeaker] = useState({ nameOfSpeaker: "", phoneOfSpeaker: "", emailOfSpeaker: "", addressOfSpeaker: "", specializationOfSpeaker: "" });
    const flagClose = useSelector(state => state.students.flagClose);
    async function doIt(speaker) {
        await dispatch(addSpeakerThunk(speaker));
        doIt2()
    }
    async function doIt2() {
        dispatch(setFlagSpeakerSlice(true))
    }

    return <div>
        {!flagClose && <><div className="tool">
            <TextField id="outlined-basic" label="שם" variant="outlined"
                type="text" className="input" value={speaker.nameOfSpeaker} onChange={x => setSpeaker({ ...speaker, nameOfSpeaker: x.target.value })} />

        </div>    <br />
            <div className="tool">
                <TextField id="outlined-basic" label="טלפון" variant="outlined"
                    className="input" value={speaker.phoneOfSpeaker} onChange={x => setSpeaker({ ...speaker, phoneOfSpeaker: x.target.value })} />

            </div>    <br />
            <div className="tool">
                <TextField id="outlined-basic" label="מייל" variant="outlined"
                    className="input" value={speaker.emailOfSpeaker} onChange={x => setSpeaker({ ...speaker, emailOfSpeaker: x.target.value })} />

            </div>    <br />

            <div className="tool">
                <TextField id="outlined-basic" label="כתובת" variant="outlined"
                    className="input" value={speaker.addressOfSpeaker} onChange={x => setSpeaker({ ...speaker, addressOfSpeaker: x.target.value })} />

            </div>    <br />
            <div className="tool">
                <TextField id="outlined-basic" label="התמחות" variant="outlined"
                    className="input" value={speaker.specializationOfSpeaker} onChange={x => setSpeaker({ ...speaker, specializationOfSpeaker: x.target.value })} />
            </div>
            <br />

            <div className="button">
                <Fab variant="outlined" onClick={() => doIt(speaker)}>
                    < ThumbUpOffAltOutlinedIcon />
                </Fab></div> </>}
    </div>
}