const Note = require("../models/noteModel");
const asyncHandler = require('express-async-handler')
//-----------------------------------------------------------------------------------------------------------------//
const getNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find({ user: req.user._id })
    res.json(notes);
});
//---------------------------------------CREATE-------------------------------------------------------------------------//
const createNote = asyncHandler(async (req, res) => {
    const { cname,
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
        saddress,
        soccupation,
        fname,
        fdob,
        fdod,
        faddress,
        foccupation,
        mname,
        mdob,
        mdod,
        maddress,
        moccupation,
        childname,
        broname,
        sisname,
        spname,
        sprelationship,
        spaddress,
        spoccupation } = req.body;

    if (!cname ||
        !cmobile ||
        !cemail ||
        !cdob ||
        !coccupation ||
        !caddress ||
        !cpassportnumber ||
        !cmaritalstatus ||
        !cmarrigedate ||
        !sname ||
        !sdob ||
        !saddress ||
        !soccupation ||
        !fname ||
        !fdob ||
        !fdod ||
        !faddress ||
        !foccupation ||
        !mname ||
        !mdob ||
        !mdod ||
        !maddress ||
        !moccupation ||
        !childname ||
        !broname ||
        !sisname ||
        !spname ||
        !sprelationship ||
        !spaddress ||
        !spoccupation) {
        res.status(400);
        throw new Error("Please Fill all the feilds");
    } else {
        const note = new Note({
            user: req.user._id,
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
            saddress,
            soccupation,
            fname,
            fdob,
            fdod,
            faddress,
            foccupation,
            mname,
            mdob,
            mdod,
            maddress,
            moccupation,
            childname,
            broname,
            sisname,
            spname,
            sprelationship,
            spaddress,
            spoccupation
        });

        const createdNote = await note.save();

        res.status(201).json(createdNote);
    }
});
//------------------------------------READ----------------------------------------------------------------------------//
const getNoteById = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id);

    if (note) {
        res.json(note);
    } else {
        res.status(404).json({ message: "Note not found" });
    }
    res.json(note);
});
//----------------------------------------UPDATE-------------------------------------------------------------------//
const UpdateNote = asyncHandler(async (req, res) => {
    const { cname,
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
        saddress,
        soccupation,
        fname,
        fdob,
        fdod,
        faddress,
        foccupation,
        mname,
        mdob,
        mdod,
        maddress,
        moccupation,
        childname,
        broname,
        sisname,
        spname,
        sprelationship,
        spaddress,
        spoccupation } = req.body;

    const note = await Note.findById(req.params.id);

    if (note.user.toString() !== req.user._id.toString()) {
        res.status(401);
        throw new Error("You can't perform this action");
    }

    if (note) {
        note.cname = cname;
        note.cmobile = cmobile;
        note.cemail = cemail;
        note.cdob = cdob;
        note.coccupation = coccupation;
        note.caddress = caddress;
        note.cpassportnumber = cpassportnumber;
        note.cmaritalstatus = cmaritalstatus;
        note.cmarrigedate = cmarrigedate;
        note.sname = sname;
        note.sdob = sdob;
        note.saddress = saddress;
        note.soccupation = soccupation;
        note.fname = fname;
        note.fdob = fdob;
        note.fdod = fdod;
        note.faddress = faddress;
        note.foccupation = foccupation;
        note.mname = mname;
        note.mdob = mdob;
        note.mdod = mdod;
        note.maddress = maddress;
        note.moccupation = moccupation;
        note.childname = childname;
        note.broname = broname;
        note.sisname = sisname;
        note.spname = spname;
        note.sprelationship = sprelationship;
        note.spaddress = spaddress;
        note.spoccupation = spoccupation;

        const updatedNote = await note.save();
        res.json(updatedNote);
    } else {
        res.status(404);
        throw new Error("Note not found");
    }
});
//------------------------------------------DELETE----------------------------------------------------------------//
const DeleteNote = asyncHandler(async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) {
            res.status(404);
            throw new Error("Note not found");
        }

        if (note.user.toString() !== req.user._id.toString()) {
            res.status(401);
            throw new Error("You can't perform this action");
        }
        const deletedNote = await Note.deleteOne({ _id: req.params.id });

        if (deletedNote.deletedCount === 1) {
            res.json({ message: "Note Removed" });
        } else {
            res.status(500);
            throw new Error("Failed to delete the note");
        }
    } catch (error) {
        console.error("Error deleting the note:", error);
        res.status(500).json({ error: error.message });
    }
});



module.exports = { getNotes, createNote, getNoteById, UpdateNote, DeleteNote }