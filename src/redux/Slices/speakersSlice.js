import { createSlice } from "@reduxjs/toolkit"
import { getSpeakersThunk } from "../Thunks/getSpeakersThunk"
import { addSpeakerThunk } from "../Thunks/addSpeakerThunk";
import { deleteSpeakerThunk } from "../Thunks/deleteSpeakerThunk"
import { getBySpeakerNameThunk } from "../Thunks/getBySpeakerNameThunk";
import { getSpeakerArchieveThunk } from "../Thunks/getSpeakerArchieveThunk";
import { getSpeakerByIdThunk } from "../Thunks/getSpeakerByIdThunk";
const INITIAL_STATE = {
    speakers: [],
    selectSpeaker: {},
    flagClose: false,
    selectedS:{}
}
export const speakersSlice = createSlice({
    name: 'speakers',
    initialState: INITIAL_STATE,
    reducers: {
        setFlagSpeakerSlice: (state, action) => {
            state.flagClose = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getSpeakersThunk.fulfilled, (state, action) => {
            state.speakers = action.payload;
        });
        builder.addCase(addSpeakerThunk.fulfilled, (state, action) => {
            state.speakers = action.payload;
        });
        builder.addCase(deleteSpeakerThunk.fulfilled, (state, action) => {
            state.speakers = action.payload;
        });
        builder.addCase(getBySpeakerNameThunk.fulfilled, (state, action) => {
            state.selectSpeaker = action.payload;
        });
        builder.addCase(getSpeakerArchieveThunk.fulfilled, (state, action) => {
            state.speakers = action.payload;
        });
        builder.addCase(getSpeakerByIdThunk.fulfilled, (state, action) => {
            state.selectedS = action.payload;
        });
    }
})
export const { setFlagSpeakerSlice } = speakersSlice.actions