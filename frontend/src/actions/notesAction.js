import { NOTES_CREATE_FAIL, NOTES_CREATE_REQUEST, NOTES_CREATE_SUCCESS, NOTES_DELETE_FAIL, NOTES_DELETE_REQUEST, NOTES_DELETE_SUCCESS, NOTES_LIST_FAIL, NOTES_LIST_REQUEST, NOTES_LIST_SUCCESS, NOTES_UPDATE_FAIL, NOTES_UPDATE_REQUEST, NOTES_UPDATE_SUCCESS } from "../constants/notesConstants";
import axios from "axios";

export const listNotes = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: NOTES_LIST_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`/api/notes`, config);

        dispatch({
            type: NOTES_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: NOTES_LIST_FAIL,
            payload: message,
        });
    }
};

export const createNoteAction = (cname,
    cmobile,
    cemail,
    cdob,
    coccupation,
    caddress,
    cpassportnumber,
    cmaritalstatus,
    cmarrigedate,
    sname,
    sdob,
    semail,
    smobile,
    saddress,
    soccupation,
    spassport,
    fname,
    fdob,
    fdod,
    fmobile,
    faddress,
    foccupation,
    fpassportnumber,
    mname,
    mdob,
    mdod,
    mmobile,
    maddress,
    moccupation,
    mpassportnumber,
    childname,
    childdob,
    childmobile,
    childaddress,
    childoccupation,
    childpassportnumber,
    broname,
    brodob,
    bromobile,
    broaddress,
    brooccupation,
    bropassportnumber,
    sisname,
    sisdob,
    sismobile,
    sisaddress,
    sisoccupation,
    sispassportnumber,
    spname,
    sprelationship,
    spmobile,
    spaddress,
    spoccupation,
    sppassportnumber) => async (dispatch, getState) => {
        try {
            dispatch({ type: NOTES_CREATE_REQUEST });

            const {
                userLogin: { userInfo },
            } = getState();

            const config = {
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };

            const { data } = await axios.post(
                `api/notes/create`,
                {
                    cname,
                    cmobile,
                    cemail,
                    cdob,
                    coccupation,
                    caddress,
                    cpassportnumber,
                    cmaritalstatus,
                    cmarrigedate,
                    sname,
                    sdob,
                    semail,
                    smobile,
                    saddress,
                    soccupation,
                    spassport,
                    fname,
                    fdob,
                    fdod,
                    fmobile,
                    faddress,
                    foccupation,
                    fpassportnumber,
                    mname,
                    mdob,
                    mdod,
                    mmobile,
                    maddress,
                    moccupation,
                    mpassportnumber,
                    childname,
                    childdob,
                    childmobile,
                    childaddress,
                    childoccupation,
                    childpassportnumber,
                    broname,
                    brodob,
                    bromobile,
                    broaddress,
                    brooccupation,
                    bropassportnumber,
                    sisname,
                    sisdob,
                    sismobile,
                    sisaddress,
                    sisoccupation,
                    sispassportnumber,
                    spname,
                    sprelationship,
                    spmobile,
                    spaddress,
                    spoccupation,
                    sppassportnumber
                },
                config
            );

            dispatch({ type: NOTES_CREATE_SUCCESS, payload: data });
        } catch (error) {
            const message =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;

            dispatch({ type: NOTES_CREATE_FAIL, payload: message });
        }
    };

export const updateNoteAction = (id,
    cname,
    cmobile,
    cemail,
    cdob,
    coccupation,
    caddress,
    cpassportnumber,
    cmaritalstatus,
    cmarrigedate,
    sname,
    sdob,
    semail,
    smobile,
    saddress,
    soccupation,
    spassport,
    fname,
    fdob,
    fdod,
    fmobile,
    faddress,
    foccupation,
    fpassportnumber,
    mname,
    mdob,
    mdod,
    mmobile,
    maddress,
    moccupation,
    mpassportnumber,
    childname,
    childdob,
    childmobile,
    childaddress,
    childoccupation,
    childpassportnumber,
    broname,
    brodob,
    bromobile,
    broaddress,
    brooccupation,
    bropassportnumber,
    sisname,
    sisdob,
    sismobile,
    sisaddress,
    sisoccupation,
    sispassportnumber,
    spname,
    sprelationship,
    spmobile,
    spaddress,
    spoccupation,
    sppassportnumber) => async (
        dispatch,
        getState
    ) => {
        try {
            dispatch({
                type: NOTES_UPDATE_REQUEST,
            });

            const {
                userLogin: { userInfo },
            } = getState();

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };

            const { data } = await axios.put(
                `/api/notes/${id}`,
                {
                    cname,
                    cmobile,
                    cemail,
                    cdob,
                    coccupation,
                    caddress,
                    cpassportnumber,
                    cmaritalstatus,
                    cmarrigedate,
                    sname,
                    sdob,
                    semail,
                    smobile,
                    saddress,
                    soccupation,
                    spassport,
                    fname,
                    fdob,
                    fdod,
                    fmobile,
                    faddress,
                    foccupation,
                    fpassportnumber,
                    mname,
                    mdob,
                    mdod,
                    mmobile,
                    maddress,
                    moccupation,
                    mpassportnumber,
                    childname,
                    childdob,
                    childmobile,
                    childaddress,
                    childoccupation,
                    childpassportnumber,
                    broname,
                    brodob,
                    bromobile,
                    broaddress,
                    brooccupation,
                    bropassportnumber,
                    sisname,
                    sisdob,
                    sismobile,
                    sisaddress,
                    sisoccupation,
                    sispassportnumber,
                    spname,
                    sprelationship,
                    spmobile,
                    spaddress,
                    spoccupation,
                    sppassportnumber
                    
                    
                },
                config
            );

            dispatch({
                type: NOTES_UPDATE_SUCCESS,
                payload: data,
            });
        } catch (error) {
            const message =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
            dispatch({
                type: NOTES_UPDATE_FAIL,
                payload: message,
            });
        }
    };


export const deleteNoteAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: NOTES_DELETE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.delete(`/api/notes/${id}`, config);

        dispatch({
            type: NOTES_DELETE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: NOTES_DELETE_FAIL,
            payload: message,
        });
    }
};  