import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

const FullApiCrud = () => {

    const [Data, setData] = useState([]);
    
    let fname = useRef();
    let lname = useRef();
    let gender = useRef();
    let email = useRef();

    // Get all data function
    const getAllData = () => {
        axios.get('http://localhost:3001/faculty').then((res) => {
            setData(res.data);
        })
    }

    // Add Data Function 
    const AddData =()=>{
        const faculty ={
            first_name: fname.current.value,
            last_name: lname.current.value, 
            gender: gender.current.value,
            email:email.current.value,
        };
        axios.post("http://localhost:3001/faculty", faculty).then((res)=>{
           alert("Faculty Added Successfully");
        // getAllData();
           setData([...Data, res.data]);
        });
    }

    //Delete Data Function
    const DeleteData=(id)=> {
       axios.delete(`http://localhost:3001/faculty/${id}`).then((res)=>{
          alert("Deleted Successfully")
        //getAllData();
          setData(Data.filter((val)=>(val.id !== id)))
        //   setdata(data.filter((val) => val.id !== id));
       })
    }

    useEffect(() => {
        getAllData();
    }, []);

    return (
        <>
            {/* input form Add */}
            <h4>Add Section</h4>
            <form>
                <div class="form-row align-items-center">
                    <div class="col-auto">
                        <label class="sr-only" for="inlineFormInput">First Name</label>
                        <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane" ref={fname} required />
                    </div>
                    <div class="col-auto">
                        <label class="sr-only" for="inlineFormInput">Last Name</label>
                        <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Doe" ref={lname} required />
                    </div>
                    <div class="col-auto">
                        <label class="sr-only" for="inlineFormInput">Gender</label>
                        <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Gender" ref={gender} required />
                    </div>
                    <div class="col-auto">
                        <label class="sr-only" for="inlineFormInputGroup">Email</label>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text">@</div>
                            </div>
                            <input type="mail" class="form-control" id="inlineFormInputGroup" placeholder="Email" ref={email} required />
                        </div>
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-2" onClick={AddData}>Submit</button>
                    </div>
                </div>
            </form>
            {/* input form Update */}
            <h4>Update Section</h4>
            <form>
                <div class="form-row align-items-center">
                    <div class="col-auto">
                        <label class="sr-only" for="inlineFormInput">First Name </label>
                        <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane" />
                    </div>
                    <div class="col-auto">
                        <label class="sr-only" for="inlineFormInput">Last Name</label>
                        <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Doe" />
                    </div>
                    <div class="col-auto">
                        <label class="sr-only" for="inlineFormInput">Gender</label>
                        <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Gender" />
                    </div>
                    <div class="col-auto">
                        <label class="sr-only" for="inlineFormInputGroup">Email</label>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text">@</div>
                            </div>
                            <input type="mail" class="form-control" id="inlineFormInputGroup" placeholder="Email" />
                        </div>
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-2">Update</button>
                    </div>
                </div>
            </form>

            {/* card */}
            <div className='row'>
            {
                Data.map((val, ind) => {
                    return (
                        <div class="card col-4" style={{ width: "18rem" }}>
                            <div class="card-body">
                                <h5 class="card-title">{val.first_name}  {val.last_name}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{val.gender}</h6>
                                <h6 class="card-subtitle mb-2 text-muted">{val.email}</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='btn btn-danger mr-3' onClick={()=>DeleteData(val.id)}>Delete</button>
                                <button className='btn btn-primary'>Update</button>
                            </div>
                        </div >
                    )
                })
            }
            </div>
        </>
    )
}
export default FullApiCrud