import React, { useEffect } from 'react'
import MainScreen from '../../components/MainScreen'
import { useNavigate } from 'react-router-dom'
import { Accordion, Button, Card } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from '../../actions/notesAction'
import Loading from '../../components/Loding'
import ErrorMessage from '../../components/ErrorMessage'
import html2pdf from 'html2pdf.js'; // Import html2pdf library
import "../Mydata/MyNotes.css"

function MyNotes({ search }) {

    const dispatch = useDispatch();
    const noteList = useSelector(state => state.noteList);
    const { loading, notes, error } = noteList;

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;

    const noteCreate = useSelector((state) => state.noteCreate);
    const { success: successCreate } = noteCreate;
    const noteUpdate = useSelector((state) => state.noteUpdate);
    const { success: successUpdate } = noteUpdate;

    const noteDelete = useSelector((state) => state.noteDelete);
    const { loading: loadingDelete, error: errorDelete, success: sucessDelete, } = noteDelete;

    const deleteHandler = (id) => {
        if (window.confirm("Are You Sure?")) {
            dispatch(deleteNoteAction(id));

        }
    };

    console.log(notes);
    const history = useNavigate();
    useEffect(() => {
        dispatch(listNotes());
        if (!userInfo) {
            history("/")
        }
    }, [dispatch, history, userInfo, successCreate, successUpdate, sucessDelete])
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" };
        return new Date(dateString).toLocaleDateString("en-IN", options);
    };
    const generatePDF = (note) => {
        const content = `
<div class="body">
      <div class="table-container1">
        <div class="column1">
        <h2>Applicant Deatils</h2>
                <p className='list-item'><b>Name:</b> ${note.cname}</p>
                <p className='list-item'><b>Mobile:</b> ${note.cmobile}</p>
                <p className='list-item'><b>Email:</b> ${note.cemail}</p>
                <p className='list-item'><b>DOB:</b> ${note.cdob}</p>
                <p className='list-item'><b>Address:</b> ${note.caddress}</p>
                <p className='list-item'><b>Occupation:</b> ${note.coccupation}</p>
                <p className='list-item'><b>Passport Number:</b> ${note.cpassportnumber}</p>
                <p className='list-item'><b>Marital Status:</b> ${note.cmaritalstatus}</p>
                <p className='list-item'><b>Marrige Date:</b> ${note.cmarrigedate}</p>   
        </div>
        <div class="column1">    
                <h2>Spouse Details</h2>
                                                    
                <p className='list-item'><b>Name:</b> ${note.sname}</p>
                <p className='list-item'><b>Mobile:</b> ${note.smobile}</p>
                <p className='list-item'><b>Email:</b> ${note.semail}</p>
                <p className='list-item'><b>DOB:</b> ${note.sdob}</p>
                <p className='list-item'><b>Address:</b> ${note.saddress}</p>
                <p className='list-item'><b>Occupation:</b> ${note.soccupation}</p>
                <p className='list-item'><b>Passport Number:</b> ${note.spassport}</p>
                                                    
        </div>
    </div>
    <div class="table-container1">
        <div class="column1">
                <h2>Father's Details</h2>                               
                <p className='list-item'><b>Name:</b> ${note.fname}</p>
                <p className='list-item'><b>Mobile:</b> ${note.fmobile}</p>
                <p className='list-item'><b>DOB:</b> ${note.fdob}</p>
                <p className='list-item'><b>DOD:</b> ${note.fdod}</p>
                <p className='list-item'><b>Address:</b> ${note.faddress}</p>
                <p className='list-item'><b>Occupation:</b> ${note.foccupation}</p>
                <p className='list-item'><b>Passport Number:</b> ${note.fpassportnumber}</p>                                                                     
        </div>
        <div class="column1">    
                <h2>Mother's Deatils</h2>                                                   
                <p className='list-item'><b>Name:</b> ${note.mname}</p>
                <p className='list-item'><b>Mobile:</b> ${note.mmobile}</p>
                <p className='list-item'><b>DOB:</b> ${note.fdob}</p>
                <p className='list-item'><b>DOD:</b> ${note.fdod}</p>
                <p className='list-item'><b>Address:</b> ${note.maddress}</p>
                <p className='list-item'><b>Occupation:</b> ${note.moccupation}</p>
                <p className='list-item'><b>Passport Number:</b> ${note.mpassportnumber}</p>                                                    
        </div>
    </div>
    <div class="table-container1">
        <div class="column1">
                <h2>Brother's Details</h2>
                                                    
                    <p className='list-item'><b>Name:</b> ${note.broname}</p>
                    <p className='list-item'><b>Mobile:</b> ${note.bromobile}</p>
                    <p className='list-item'><b>DOB:</b> ${note.brodob}</p>
                    <p className='list-item'><b>Address:</b> ${note.broaddress}</p>
                    <p className='list-item'><b>Occupation:</b> ${note.brooccupation}</p>
                    <p className='list-item'><b>Passport Number:</b>${note.bropassportnumber}</p>

                                                                                                                         
        </div>
        <div class="column1">    
                <h2>Sister's Deatils</h2>
                    <p className='list-item'><b>Name:</b> ${note.sisname}</p>
                    <p className='list-item'><b>Mobile:</b> ${note.sismobile}</p>
                    <p className='list-item'><b>DOB:</b> ${note.sisdob}</p>
                    <p className='list-item'><b>Address:</b> ${note.sisaddress}</p>
                    <p className='list-item'><b>Occupation:</b> ${note.sisoccupation}</p>
                    <p className='list-item'><b>Passport Number:</b> ${note.sispassportnumber}</p>                                                                       
        </div>
    </div>
    <div class="table-container1">
        <div class="column1">
                <h2>Children's Details</h2>
                                                    
                    <p className='list-item'><b>Name:</b> ${note.childname}</p>
                    <p className='list-item'><b>Mobile:</b> ${note.childmobile}</p>
                    <p className='list-item'><b>DOB:</b> ${note.childdob}</p>
                    <p className='list-item'><b>Address:</b> ${note.childaddress}</p>
                    <p className='list-item'><b>Occupation:</b> ${note.childoccupation}</p>
                    <p className='list-item'><b>Passport Number:</b> ${note.childpassportnumber}</p>
        </div>                                     
        <div class="column1">    
               <h2>Sponsor's Deatils</h2>                                                  
                 <p className='list-item'><b>Name:</b> ${note.spname}</p>
                 <p className='list-item'><b>Mobile:</b> ${note.spmobile}</p>
                 <p className='list-item'><b>Relationship:</b> ${note.sprelationship}</p>
                 <p className='list-item'><b>Country:</b> ${note.spaddress}</p>
                 <p className='list-item'><b>Occupation:</b> ${note.spoccupation}</p>
                 <p className='list-item'><b>Passport Number:</b> ${note.sppassportnumber}</p>                                                                                                                  
        </div>
    </div>
</div>
  `;


        const opt = {
            margin: 10,
            filename: `${note.title}.pdf`,
            html2pdf: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
        };

        const element = document.createElement('div');
        element.innerHTML = content;

        html2pdf().from(element).set(opt).save().then(() => {
            // Refresh the page after PDF download
            window.location.reload();
        });

    };

    return (
        <div className="my-notes-container">
            <MainScreen title=<b>{`Welcome ${userInfo && userInfo.name}`}</b>>

                <Button href='/createnote' style={{ marginLeft: 10, marginBottom: 6 }} size='lg' variant='warning'>
                    Create New Client
                </Button>
                {errorDelete && (
                    <ErrorMessage varient="danger">{errorDelete}</ErrorMessage>
                )}
                {loadingDelete && <Loading />}
                {error && <ErrorMessage varient='info'>{error}</ErrorMessage>}
                {loading && <Loading />}

                {notes?.reverse().filter(filteredNotes => filteredNotes.cname.toLowerCase().includes(search.toLowerCase())).map(note => (

                    <Card>
                        <Card.Header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <span style={{
                                color: 'black',
                                textDecoration: 'none',
                                fontSize: '30px',
                                marginBottom: '10px',
                            }}>
                                {note.cname}<br />
                                <span style={{ fontSize: '20px' }}>Father's Name: {note.fname}</span>
                            </span>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button
                                    onClick={() => generatePDF(note)}
                                    className='mx-2'
                                    variant='primary'
                                >
                                    Download
                                </Button>
                                <Button variant='dark' href={`/note/${note._id}`} >
                                    Edit
                                </Button>
                                <Button
                                    className='mx-2'
                                    variant='danger'
                                    onClick={() => deleteHandler(note._id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </Card.Header>

                        <Accordion>
                            <Accordion.Header>Click to See Deatils</Accordion.Header>
                            <Accordion.Body>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <div style={{ fontFamily: 'Arial, sans-serif', padding: '10px' }}>
                                            
                                            <div className='flex-container' >
                                                <div className='column'>
                                                    <h2>Applicant Deatils</h2>
                                                    <ul>
                                                        <li className='list-item'><b>Name:</b> {note.cname}</li>
                                                        <li className='list-item'><b>Mobile:</b> {note.cmobile}</li>
                                                        <li className='list-item'><b>Email:</b> {note.cemail}</li>
                                                        <li className='list-item'><b>DOB:</b> {note.cdob}</li>
                                                        <li className='list-item'><b>Address:</b> {note.caddress}</li>
                                                        <li className='list-item'><b>Occupation:</b> {note.coccupation}</li>
                                                        <li className='list-item'><b>Passport Number:</b> {note.cpassportnumber}</li>
                                                        <li className='list-item'><b>Marital Status:</b> {note.cmaritalstatus}</li>
                                                        <li className='list-item'><b>Marrige Date:</b> {note.cmarrigedate}</li>
                                                    </ul>
                                                </div>
                                                <div className='column'>
                                                    <h2>Spouse Details</h2>
                                                    <ul>
                                                        <li className='list-item'><b>Name:</b> {note.sname}</li>
                                                        <li className='list-item'><b>Mobile:</b> {note.smobile}</li>
                                                        <li className='list-item'><b>Email:</b> {note.semail}</li>
                                                        <li className='list-item'><b>DOB:</b> {note.sdob}</li>
                                                        <li className='list-item'><b>Address:</b> {note.saddress}</li>
                                                        <li className='list-item'><b>Occupation:</b> {note.soccupation}</li>
                                                        <li className='list-item'><b>Passport Number:</b> {note.spassport}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='flex-container' >
                                                <div className='column'>
                                                    <h2>Father's Details</h2>
                                                    <ul>
                                                        <li className='list-item'><b>Name:</b> {note.fname}</li>
                                                        <li className='list-item'><b>Mobile:</b> {note.fmobile}</li>
                                                        <li className='list-item'><b>DOB:</b> {note.fdob}</li>
                                                        <li className='list-item'><b>DOD:</b> {note.fdod}</li>
                                                        <li className='list-item'><b>Address:</b> {note.faddress}</li>
                                                        <li className='list-item'><b>Occupation:</b> {note.foccupation}</li>
                                                        <li className='list-item'><b>Passport Number:</b> {note.fpassportnumber}</li>

                                                    </ul>
                                                </div>
                                                <div className='column'>
                                                    <h2>Mother's Deatils</h2>
                                                    <ul>
                                                        <li className='list-item'><b>Name:</b> {note.mname}</li>
                                                        <li className='list-item'><b>Mobile:</b> {note.mmobile}</li>
                                                        <li className='list-item'><b>DOB:</b> {note.fdob}</li>
                                                        <li className='list-item'><b>DOD:</b> {note.fdod}</li>
                                                        <li className='list-item'><b>Address:</b> {note.maddress}</li>
                                                        <li className='list-item'><b>Occupation:</b> {note.moccupation}</li>
                                                        <li className='list-item'><b>Passport Number:</b> {note.mpassportnumber}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='flex-container' >
                                                <div className='column'>
                                                    <h2>Brother's Details</h2>
                                                    <ul>
                                                        <li className='list-item'><b>Name:</b> {note.broname}</li>
                                                        <li className='list-item'><b>Mobile:</b> {note.bromobile}</li>
                                                        <li className='list-item'><b>DOB:</b> {note.brodob}</li>
                                                        <li className='list-item'><b>Address:</b> {note.broaddress}</li>
                                                        <li className='list-item'><b>Occupation:</b> {note.brooccupation}</li>
                                                        <li className='list-item'><b>Passport Number:</b> {note.bropassportnumber}</li>

                                                    </ul>
                                                </div>
                                                <div className='column'>
                                                    <h2>Sister's Deatils</h2>
                                                    <ul>
                                                        <li className='list-item'><b>Name:</b> {note.sisname}</li>
                                                        <li className='list-item'><b>Mobile:</b> {note.sismobile}</li>
                                                        <li className='list-item'><b>DOB:</b> {note.sisdob}</li>
                                                        <li className='list-item'><b>Address:</b> {note.sisaddress}</li>
                                                        <li className='list-item'><b>Occupation:</b> {note.sisoccupation}</li>
                                                        <li className='list-item'><b>Passport Number:</b> {note.sispassportnumber}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='flex-container' >
                                                <div className='column'>
                                                    <h2>Children's Details</h2>
                                                    <ul>
                                                        <li className='list-item'><b>Name:</b> {note.childname}</li>
                                                        <li className='list-item'><b>Mobile:</b> {note.childmobile}</li>
                                                        <li className='list-item'><b>DOB:</b> {note.childdob}</li>
                                                        <li className='list-item'><b>Address:</b> {note.childaddress}</li>
                                                        <li className='list-item'><b>Occupation:</b> {note.childoccupation}</li>
                                                        <li className='list-item'><b>Passport Number:</b> {note.childpassportnumber}</li>

                                                    </ul>
                                                </div>
                                                <div className='column'>
                                                    <h2>Sponsor's Deatils</h2>
                                                    <ul>
                                                        <li className='list-item'><b>Name:</b> {note.spname}</li>
                                                        <li className='list-item'><b>Mobile:</b> {note.spmobile}</li>
                                                        <li className='list-item'><b>Relationship:</b> {note.sprelationship}</li>
                                                        <li className='list-item'><b>Country:</b> {note.spaddress}</li>
                                                        <li className='list-item'><b>Occupation:</b> {note.spoccupation}</li>
                                                        <li className='list-item'><b>Passport Number:</b> {note.sppassportnumber}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>


                                        <br></br>
                                        <footer className="blockquote-footer" style={{ 'color': 'black' }}>
                                            Created On-
                                            <cite title="Source Title">
                                                {formatDate(note.createdAt)}
                                            </cite>
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Accordion.Body>
                        </Accordion>
                    </Card>
                ))
                }


            </MainScreen>
        </div >
    )
}

export default MyNotes
