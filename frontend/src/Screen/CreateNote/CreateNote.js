import React from "react";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import '../CreateNote/CreateNote.css';
import { useNavigate, useLocation } from "react-router-dom";
import { createNoteAction } from "../../actions/notesAction";
import Loading from "../../components/Loding";
import ErrorComponent from "../../components/ErrorMessage";




const CreateNote = () => {
    const [cname, setCname] = useState("");
    const [cmobile, setCmobile] = useState("");
    const [cemail, setCemail] = useState("");
    const [cdob, setCdob] = useState("");
    const [coccupation, setCoccupation] = useState("");
    const [caddress, setCaddress] = useState("");
    const [cpassportnumber, setCpassportnumber] = useState("");
    const [cmaritalstatus, setCmaritalstatus] = useState("");
    const [cmarrigedate, setCmarrigedate] = useState("");
    const [sname, setSname] = useState("");
    const [sdob, setSdob] = useState("");
    const [semail, setSemail] = useState("");
    const [smobile, setSmobile] = useState("");
    const [saddress, setSaddress] = useState("");
    const [soccupation, setSoccupation] = useState("");
    const [spassport, setSpassport] = useState("");
    const [fname, setFname] = useState("");
    const [fdob, setFdob] = useState("");
    const [fdod, setFdod] = useState("");
    const [fmobile, setFmobile] = useState("");
    const [faddress, setFaddress] = useState("");
    const [foccupation, setFoccupation] = useState("");
    const [fpassportnumber, setFpassportnumber] = useState("");
    const [mname, setMname] = useState("");
    const [mdob, setMdob] = useState("");
    const [mdod, setMdod] = useState("");
    const [mmobile, setMmobile] = useState("");
    const [maddress, setMaddress] = useState("");
    const [moccupation, setMoccupation] = useState("");
    const [mpassportnumber, setMpassportnumber] = useState("");
    const [childname, setChildname] = useState("");
    const [childdob, setChilddob] = useState("");
    const [childmobile, setChildmobile] = useState("");
    const [childaddress, setChildaddress] = useState("");
    const [childoccupation, setChildoccupation] = useState("");
    const [childpassportnumber, setChildpassportnumber] = useState("");
    const [broname, setBroname] = useState("");
    const [brodob, setBrodob] = useState("");
    const [bromobile, setBromobile] = useState("");
    const [broaddress, setBroaddress] = useState("");
    const [brooccupation, setBrooccupation] = useState("");
    const [bropassportnumber, setBropassportnumber] = useState("");
    const [sisname, setSisname] = useState("");
    const [sisdob, setSisdob] = useState("");
    const [sismobile, setSismobile] = useState("");
    const [sisaddress, setSisaddress] = useState("");
    const [sisoccupation, setSisoccupation] = useState("");
    const [sispassportnumber, setSispassportnumber] = useState("");
    const [spname, setSpname] = useState("");
    const [sprelationship, setSprelationship] = useState("");
    const [spmobile, setSpmobile] = useState("");
    const [spaddress, setSpaddress] = useState("");
    const [spoccupation, setSpoccupation] = useState("");
    const [sppassportnumber, setSppassportnumber] = useState("");


    const dispatch = useDispatch();
    const noteCreate = useSelector((state) => state.noteCreate);
    //eslint-disable-next-line
    const { loading, error, note } = noteCreate;

    const location = useLocation();
    const Navigate = useNavigate();
    console.log(location.pathname);


    const resetHandler = () => {
        setCname("");
        setCemail("");
        setCmobile("");
        setCdob("");
        setCoccupation("");
        setCaddress("");
        setCpassportnumber("");
        setCmaritalstatus("");
        setCmarrigedate("");
        setSname("");
        setSdob("");
        setSemail("");
        setSmobile("");
        setSaddress("");
        setSoccupation("");
        setSpassport("");
        setFname("");
        setFdob("");
        setFdod("");
        setFmobile("");
        setFaddress("");
        setFoccupation("");
        setFpassportnumber("");
        setMname("");
        setMdob("");
        setMdod("");
        setMmobile("");
        setMaddress("");
        setMoccupation("");
        setMpassportnumber("");
        setChildname("");
        setChilddob("");
        setChildmobile("");
        setChildaddress("");
        setChildoccupation("");
        setChildpassportnumber("");
        setBroname("");
        setBrodob("");
        setBromobile("");
        setBroaddress("");
        setBrooccupation("");
        setBropassportnumber("");
        setSisname("");
        setSisdob("");
        setSismobile("");
        setSisaddress("");
        setSisoccupation("");
        setSispassportnumber("");
        setSpname("");
        setSprelationship("");
        setSpmobile("");
        setSpaddress("");
        setSpoccupation("");
        setSppassportnumber("");
    };

    const submitHandler = (e) => {
        e.preventDefault();
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
            !sppassportnumber
        )
            return;
        dispatch(createNoteAction(
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

        ));
        resetHandler();
        Navigate(`/mydata`);


    };


    return (
        <MainScreen title="Fill the database">

            <Card style={{ 'fontSize': '20px' }}>
                {error && <ErrorComponent>{error.message}</ErrorComponent>}
                <Card.Header>Create a Note</Card.Header>
                <Card.Body >
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="cname" className="mb-4">
                            <Form.Label>Applicant Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={cname}

                                onChange={(e) => setCname(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="cmobile" className="mb-4">
                            <Form.Label>Applicent Mobile</Form.Label>
                            <Form.Control
                                type="number"
                                value={cmobile}

                                onChange={(e) => setCmobile(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="email" className="mb-4">
                            <Form.Label>Applicent Email</Form.Label>
                            <Form.Control
                                type="text"
                                value={cemail}

                                onChange={(e) => setCemail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="cdob" className="mb-4">
                            <Form.Label>Applicent DOB</Form.Label>
                            <Form.Control
                                type="date"
                                value={cdob}

                                onChange={(e) => setCdob(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="coccupation" className="mb-4">
                            <Form.Label>Applicent Occupation</Form.Label>
                            <Form.Control
                                type="text"
                                value={coccupation}
                                onChange={(e) => setCoccupation(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="caddress" className="mb-4">
                            <Form.Label>Applicent Address</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={caddress}

                                onChange={(e) => setCaddress(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="cpassportnumber" className="mb-4">
                            <Form.Label>Applicent Passpport Number</Form.Label>
                            <Form.Control
                                type="text"
                                value={cpassportnumber}

                                onChange={(e) => setCpassportnumber(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="cmaritalstatus" className="mb-4">
                            <Form.Label>Marital Status</Form.Label>
                            <Form.Control
                                type="text"
                                value={cmaritalstatus}
                                placeholder="Single or Married"
                                onChange={(e) => setCmaritalstatus(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="cmarrigedate" className="mb-4">
                            <Form.Label>Marrige Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={cmarrigedate}
                                onChange={(e) => setCmarrigedate(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="sname" className="mb-4">
                            <Form.Label>Spouse Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={sname}

                                onChange={(e) => setSname(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="sdob" className="mb-4">
                            <Form.Label>Spouse DOB</Form.Label>
                            <Form.Control
                                type="date"
                                value={sdob}
                                onChange={(e) => setSdob(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="semail" className="mb-4">
                            <Form.Label>Spouse Email</Form.Label>
                            <Form.Control
                                type="text"
                                value={semail}

                                onChange={(e) => setSemail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="smobile" className="mb-4">
                            <Form.Label>Spouse Mobile</Form.Label>
                            <Form.Control
                                type="number"
                                value={smobile}
                                onChange={(e) => setSmobile(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="saddress" className="mb-4">
                            <Form.Label>Spouse Address</Form.Label>
                            <Form.Control
                                type="text"
                                value={saddress}
                                onChange={(e) => setSaddress(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="soccupation" className="mb-4">
                            <Form.Label>Spouse Occupation</Form.Label>
                            <Form.Control
                                type="text"
                                value={soccupation}
                                onChange={(e) => setSoccupation(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="spassport" className="mb-4">
                            <Form.Label>Spouse Passport Number</Form.Label>
                            <Form.Control
                                type="text"
                                value={spassport}
                                onChange={(e) => setSpassport(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="fname" className="mb-4">
                            <Form.Label>Father Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={fname}

                                onChange={(e) => setFname(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="fdob" className="mb-4">
                            <Form.Label>Fathers DOB</Form.Label>
                            <Form.Control
                                type="date"
                                value={fdob}

                                onChange={(e) => setFdob(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="fdod" className="mb-4">
                            <Form.Label>Father's DOD</Form.Label>
                            <Form.Control
                                type="text"
                                value={fdod}

                                onChange={(e) => setFdod(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="fmobile" className="mb-4">
                            <Form.Label>Father's Mobile Number</Form.Label>
                            <Form.Control
                                type="number"
                                value={fmobile}

                                onChange={(e) => setFmobile(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="faddress" className="mb-4">
                            <Form.Label>Father's Address</Form.Label>
                            <Form.Control
                                type="text"
                                value={faddress}
                                onChange={(e) => setFaddress(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="foccupation" className="mb-4">
                            <Form.Label>Father's Occupation</Form.Label>
                            <Form.Control
                                type="text"
                                value={foccupation}

                                onChange={(e) => setFoccupation(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="fpassportnumber" className="mb-4">
                            <Form.Label>Father's Passport Number</Form.Label>
                            <Form.Control
                                type="number"
                                value={fpassportnumber}

                                onChange={(e) => setFpassportnumber(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="mname" className="mb-4">
                            <Form.Label>Mother's Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={mname}

                                onChange={(e) => setMname(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="mdob" className="mb-4">
                            <Form.Label>Mother's DOB</Form.Label>
                            <Form.Control
                                type="date"
                                value={mdob}
                                onChange={(e) => setMdob(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="mdod" className="mb-4">
                            <Form.Label>Mother's DOD</Form.Label>
                            <Form.Control
                                type="text"
                                value={mdod}
                                onChange={(e) => setMdod(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="mmobile" className="mb-4">
                            <Form.Label>Mother's Mobile</Form.Label>
                            <Form.Control
                                type="number"
                                value={mmobile}

                                onChange={(e) => setMmobile(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="maddress" className="mb-4">
                            <Form.Label>Mother's Address</Form.Label>
                            <Form.Control
                                type="text"
                                value={maddress}

                                onChange={(e) => setMaddress(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="moccupation" className="mb-4">
                            <Form.Label>Mother's Occupation</Form.Label>
                            <Form.Control
                                type="text"
                                value={moccupation}

                                onChange={(e) => setMoccupation(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="mpassportnumber" className="mb-4">
                            <Form.Label>Mother's Passport</Form.Label>
                            <Form.Control
                                type="text"
                                value={mpassportnumber}

                                onChange={(e) => setMpassportnumber(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="childname" className="mb-4">
                            <Form.Label>Children Name</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={childname}

                                onChange={(e) => setChildname(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="childdob" className="mb-4">
                            <Form.Label>Children DOB</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={childdob}

                                onChange={(e) => setChilddob(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="childmobile" className="mb-4">
                            <Form.Label>Children Mobile</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={childmobile}

                                onChange={(e) => setChildmobile(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="childaddress" className="mb-4">
                            <Form.Label>Children Address</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={childaddress}

                                onChange={(e) => setChildaddress(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="childoccupation" className="mb-4">
                            <Form.Label>Children Occupation</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={childoccupation}

                                onChange={(e) => setChildoccupation(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="childpassportnumber" className="mb-4">
                            <Form.Label>Children Passport Number</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={childpassportnumber}

                                onChange={(e) => setChildpassportnumber(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="broname" className="mb-4">
                            <Form.Label>Brother's Name</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={broname}

                                onChange={(e) => setBroname(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="brodob" className="mb-4">
                            <Form.Label>Brothers's DOB</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={brodob}

                                onChange={(e) => setBrodob(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="bromobile" className="mb-4">
                            <Form.Label>Brothers's Mobile</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={bromobile}

                                onChange={(e) => setBromobile(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="broaddress" className="mb-4">
                            <Form.Label>Brother's Address</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={broaddress}

                                onChange={(e) => setBroaddress(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="brooccupation" className="mb-4">
                            <Form.Label>Brother's Occupation</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={brooccupation}

                                onChange={(e) => setBrooccupation(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="bropassportnumber" className="mb-4">
                            <Form.Label>Brother's Passport Number</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={bropassportnumber}

                                onChange={(e) => setBropassportnumber(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="sisname" className="mb-4">
                            <Form.Label>Sister's Name</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={sisname}

                                onChange={(e) => setSisname(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="sisdob" className="mb-4">
                            <Form.Label>Sister's DOB</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={sisdob}

                                onChange={(e) => setSisdob(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="sismobile" className="mb-4">
                            <Form.Label>Sister's Mobile</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={sismobile}

                                onChange={(e) => setSismobile(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="sisaddress" className="mb-4">
                            <Form.Label>Sister's Address</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={sisaddress}

                                onChange={(e) => setSisaddress(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="sisoccupation" className="mb-4">
                            <Form.Label>Sister's Occupation</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={sisoccupation}

                                onChange={(e) => setSisoccupation(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="sispassportnumber" className="mb-4">
                            <Form.Label>Sister's Passport Number</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={sispassportnumber}

                                onChange={(e) => setSispassportnumber(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="spname" className="mb-4">
                            <Form.Label>Sponsor's Name</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={spname}

                                onChange={(e) => setSpname(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="sprelationship" className="mb-4">
                            <Form.Label>Sponsor's Relationship </Form.Label>
                            <Form.Control
                                as="textarea"
                                value={sprelationship}

                                onChange={(e) => setSprelationship(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="spmobile" className="mb-4">
                            <Form.Label>Sponsor Mobile</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={spmobile}

                                onChange={(e) => setSpmobile(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="spaddress" className="mb-4">
                            <Form.Label>Sponsor Address</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={spaddress}

                                onChange={(e) => setSpaddress(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="spoccupation" className="mb-4">
                            <Form.Label>Sponsor Occupation</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={spoccupation}

                                onChange={(e) => setSpoccupation(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="sppassportnumber" className="mb-4">
                            <Form.Label>Sponsor Passport Number</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={sppassportnumber}

                                onChange={(e) => setSppassportnumber(e.target.value)}
                            />
                        </Form.Group>
                        {loading && <Loading size={50} />}
                        <Button type="submit" variant="primary">
                            Create Client
                        </Button>
                        <Button onClick={resetHandler} variant="danger" className="ms-4 px-3 red-button">
                            Reset Fields
                        </Button>
                    </Form>
                </Card.Body>
                <Card.Footer className="text-muted">
                    Created on -: {new Date().toLocaleString()}
                </Card.Footer>
            </Card>

        </MainScreen>
    );
};

export default CreateNote;
