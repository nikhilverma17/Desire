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
        sppassportnumber } = req.body;

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
        !semail ||
        !smobile ||
        !saddress ||
        !soccupation ||
        !spassport ||
        !fname ||
        !fdob ||
        !fdod ||
        !fmobile ||
        !faddress ||
        !foccupation ||
        !fpassportnumber ||
        !mname ||
        !mdob ||
        !mdod ||
        !mmobile ||
        !maddress ||
        !moccupation ||
        !mpassportnumber ||
        !childname ||
        !childdob ||
        !childmobile ||
        !childaddress ||
        !childoccupation ||
        !childpassportnumber ||
        !broname ||
        !brodob ||
        !bromobile ||
        !broaddress ||
        !brooccupation ||
        !bropassportnumber ||
        !sisname ||
        !sisdob ||
        !sismobile ||
        !sisaddress ||
        !sisoccupation ||
        !sispassportnumber ||
        !spname ||
        !sprelationship ||
        !spmobile ||
        !spaddress ||
        !spoccupation ||
        !sppassportnumber) {
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
        sppassportnumber } = req.body;

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
        note.semail = semail;
        note.smobile = smobile;
        note.saddress = saddress;
        note.soccupation = soccupation;
        note.spassport = spassport;
        note.fname = fname;
        note.fdob = fdob;
        note.fdod = fdod;
        note.fmobile = fmobile;
        note.faddress = faddress;
        note.foccupation = foccupation;
        note.fpassportnumber = fpassportnumber;
        note.mname = mname;
        note.mdob = mdob;
        note.mdod = mdod;
        note.mmobile = mmobile;
        note.maddress = maddress;
        note.moccupation = moccupation;
        note.mpassportnumber = mpassportnumber;
        note.childname = childname;
        note.childdob = childdob;
        note.childmobile = childmobile;
        note.childaddress = childaddress;
        note.childoccupation = childoccupation;
        note.childpassportnumber = childpassportnumber;
        note.broname = broname;
        note.brodob = brodob;
        note.bromobile = bromobile;
        note.broaddress = broaddress;
        note.brooccupation = brooccupation;
        note.bropassportnumber = bropassportnumber;
        note.sisname = sisname;
        note.sisdob = sisdob;
        note.sismobile = sismobile;
        note.sisaddress = sisaddress;
        note.sisoccupation = sisoccupation;
        note.sispassportnumber = sispassportnumber;
        note.spname = spname;
        note.sprelationship = sprelationship;
        note.spmobile = spmobile;
        note.spaddress = spaddress;
        note.spoccupation = spoccupation;
        note.sppassportnumbe = sppassportnumber;

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