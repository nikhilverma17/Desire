const mongoose = require("mongoose");
const noteSchema = mongoose.Schema(
    {
        cname: {
            type: String,
            required: true,
        },
        cmobile: {
            type: String,
            required: true,
        },
        cemail: {
            type: String,
            required: true,
        },
        cdob: {
            type: String,
            required: true,
        },
        coccupation: {
            type: String,
            required: true,
        },
        caddress: {
            type: String,
            required: true,
        },
        cpassportnumber: {
            type: String,
            required: true,
        },
        cmaritalstatus: {
            type: String,
            required: true,
        },
        cmarrigedate: {
            type: String,
            required: true,
        },
        sname: {
            type: String,
            required: true,
        },
        sdob: {
            type: String,
            required: true,
        },
        semail: {
            type: String,
            required: true,
        },
        smobile: {
            type: String,
            required: true,
        },
        saddress: {
            type: String,
            required: true,
        },
        soccupation: {
            type: String,
            required: true,
        },
        spassport: {
            type: String,
            required: true,
        },
        fname: {
            type: String,
            required: true,
        },
        fdob: {
            type: String,
            required: true,
        },
        fdod: {
            type: String,
            required: true,
        },
        fmobile: {
            type: String,
            required: true,
        },
        faddress: {
            type: String,
            required: true,
        },
        foccupation: {
            type: String,
            required: true,
        },
        fpassportnumber: {
            type: String,
            required: true,
        },
        mname: {
            type: String,
            required: true,
        },
        mdob: {
            type: String,
            required: true,
        },
        mdod: {
            type: String,
            required: true,
        },
        mmobile: {
            type: String,
            required: true,
        },
        maddress: {
            type: String,
            required: true,
        },
        moccupation: {
            type: String,
            required: true,
        },
        mpassportnumber: {
            type: String,
            required: true,
        },
        childname: {
            type: String,
            required: true,
        },
        childdob: {
            type: String,
            required: true,
        },
        childmobile: {
            type: String,
            required: true,
        },
        childaddress: {
            type: String,
            required: true,
        },
        childoccupation: {
            type: String,
            required: true,
        },
        childpassportnumber: {
            type: String,
            required: true,
        },
        broname: {
            type: String,
            required: true,
        },
        brodob: {
            type: String,
            required: true,
        },
        bromobile: {
            type: String,
            required: true,
        },
        broaddress: {
            type: String,
            required: true,
        },
        brooccupation: {
            type: String,
            required: true,
        },
        bropassportnumber: {
            type: String,
            required: true,
        },
        sisname: {
            type: String,
            required: true,
        },
        sisdob: {
            type: String,
            required: true,
        },
        sismobile: {
            type: String,
            required: true,
        },
        sisaddress: {
            type: String,
            required: true,
        },
        sisoccupation: {
            type: String,
            required: true,
        },
        sispassportnumber: {
            type: String,
            required: true,
        },
        spname: {
            type: String,
            required: true,
        },
        sprelationship: {
            type: String,
            required: true,
        },
        spmobile: {
            type: String,
            required: true,
        },
        spaddress: {
            type: String,
            required: true,
        },
        spoccupation: {
            type: String,
            required: true,
        },
        sppassportnumber: {
            type: String,
            required: true,
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);
const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
