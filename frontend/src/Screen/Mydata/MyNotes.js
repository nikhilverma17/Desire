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
        </div>
         <div class="column1">
         <br></br>

                <p className='list-item'><b>Occupation:</b> ${note.coccupation}</p>
                <p className='list-item'><b>Passport Number:</b> ${note.cpassportnumber}</p>
                <p className='list-item'><b>Marital Status:</b> ${note.cmaritalstatus}</p>
                <p className='list-item'><b>Marrige Date:</b> ${note.cmarrigedate}</p>   
        </div>
        <div class="column1">    
                <h2>Spouse Details</h2>
                                                    
                <p className='list-item'><b>Name:</b> ${note.sname}</p>
                <p className='list-item'><b>DOB:</b> ${note.sdob}</p>
                <p className='list-item'><b>Address:</b> ${note.saddress}</p>
                <p className='list-item'><b>Occupation:</b> ${note.soccupation}</p>
                                                    
        </div>
    </div>
    <div class="table-container1">
        <div class="column1">
                <h2>Father's Details</h2>                               
                <p className='list-item'><b>Name:</b> ${note.fname}</p>
                <p className='list-item'><b>DOB:</b> ${note.fdob}</p>
                <p className='list-item'><b>DOD:</b> ${note.fdod}</p>
                <p className='list-item'><b>Address:</b> ${note.faddress}</p>
                <p className='list-item'><b>Occupation:</b> ${note.foccupation}</p>
                                                                    
        </div>
        <div class="column1">    
                <h2>Mother's Deatils</h2>                                                   
                <p className='list-item'><b>Name:</b> ${note.mname}</p>
                <p className='list-item'><b>DOB:</b> ${note.fdob}</p>
                <p className='list-item'><b>DOD:</b> ${note.fdod}</p>
                <p className='list-item'><b>Address:</b> ${note.maddress}</p>
                <p className='list-item'><b>Occupation:</b> ${note.moccupation}</p>                                                  
        </div>
         <div class="column1">
               <h2>Sponsor's Deatils</h2>
                 <p className='list-item'><b>Name:</b> ${note.spname}</p>
                 <p className='list-item'><b>Relationship:</b> ${note.sprelationship}</p>
                 <p className='list-item'><b>Country:</b> ${note.spaddress}</p>
                 <p className='list-item'><b>Occupation:</b> ${note.spoccupation}</p>                                                                                                                
        </div>
    </div>
    <div class="table-container1">
        <div class="column1">
                <h2>Brother's Details</h2>
                                                    
                    <p className='list-item'><b>Name:</b> ${note.broname}</p>

                                                                                                                         
        </div>
        <div class="column1">    
                <h2>Sister's Deatils</h2>
                    <p className='list-item'><b>Name:</b> ${note.sisname}</p>                                                                       
        </div>
         <div class="column1">
                <h2>Children's Details</h2>

                    <p className='list-item'><b>Name:</b> ${note.childname}</p>
        </div> 
    </div>
</div>
  `;


        const opt = {
            margin: 10,
            filename: `${note.cname}.pdf`,
            html2pdf: { scale: 1 },
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
                                                    </ul>
                                                </div>
                                                <div className='column'>
                                                    <br></br>
                                                    <ul>
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
                                                        <li className='list-item'><b>DOB:</b> {note.sdob}</li>
                                                        <li className='list-item'><b>Address:</b> {note.saddress}</li>
                                                        <li className='list-item'><b>Occupation:</b> {note.soccupation}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='flex-container' >
                                                <div className='column'>
                                                    <h2>Father's Details</h2>
                                                    <ul>
                                                        <li className='list-item'><b>Name:</b> {note.fname}</li>
                                                        <li className='list-item'><b>DOB:</b> {note.fdob}</li>
                                                        <li className='list-item'><b>DOD:</b> {note.fdod}</li>
                                                        <li className='list-item'><b>Address:</b> {note.faddress}</li>
                                                        <li className='list-item'><b>Occupation:</b> {note.foccupation}</li>

                                                    </ul>
                                                </div>
                                                <div className='column'>
                                                    <h2>Mother's Deatils</h2>
                                                    <ul>
                                                        <li className='list-item'><b>Name:</b> {note.mname}</li>
                                                        <li className='list-item'><b>DOB:</b> {note.fdob}</li>
                                                        <li className='list-item'><b>DOD:</b> {note.fdod}</li>
                                                        <li className='list-item'><b>Address:</b> {note.maddress}</li>
                                                        <li className='list-item'><b>Occupation:</b> {note.moccupation}</li>
                                                    </ul>
                                                </div>
                                                <div className='column'>
                                                    <h2>Sponsor's Deatils</h2>
                                                    <ul>
                                                        <li className='list-item'><b>Name:</b> {note.spname}</li>
                                                        <li className='list-item'><b>Relationship:</b> {note.sprelationship}</li>
                                                        <li className='list-item'><b>Country:</b> {note.spaddress}</li>
                                                        <li className='list-item'><b>Occupation:</b> {note.spoccupation}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='flex-container' >
                                                <div className='column'>
                                                    <h2>Brother's Details</h2>
                                                    <ul>
                                                        <li className='list-item'><b>Name:</b> {note.broname}</li>

                                                    </ul>
                                                </div>
                                                <div className='column'>
                                                    <h2>Sister's Deatils</h2>
                                                    <ul>
                                                        <li className='list-item'><b>Name:</b> {note.sisname}</li>
                                                    </ul>
                                                </div>
                                                <div className='column'>
                                                    <h2>Children's Details</h2>
                                                    <ul>
                                                        <li className='list-item'><b>Name:</b> {note.childname}</li>
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
