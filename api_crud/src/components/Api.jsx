import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from "react";

const Api = () => {
  let [data, setdata] = useState([]);
  let name = useRef();
  let email = useRef();
  let age = useRef();

  //get data
  let fetchData = () => {
    axios.get("http://localhost:3001/group").then((res) => {
      //   console.log(res.data);
      setdata(res.data);
    });
  };

  //add data
  let handleSubmit = () => {
    let dataa = {
      name: name.current.value,
      email: email.current.value,
      age: age.current.value,
    };

    axios.post("http://localhost:3001/group", dataa).then((res) => {
      console.log(res.data);
      // fetchData()
      setdata([...data, res.data]);
    });
  };

  //delete data
  let deleteData = (id) => {
    console.log(id);

    axios.delete(`http://localhost:3001/group/${id}`).then((res) => {
      console.log(res);
      setdata(data.filter((val) => val.id !== id));
    });
  };

  //update data
  

  useEffect(() => {
    //get data
    fetchData();
  }, []);

  return (
    <>
      <input type="text" name="name" ref={name} />
      <input type="email" name="email" ref={email} />
      <input type="number" name="age" ref={age} />
      <button onClick={handleSubmit}>Add</button>

      <div class="row">
        {data?.map((val, ind) => {
          return (
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">{val.name}</h5>
                <h5 class="card-title">{val.email}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{val.age}</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button onClick={() => deleteData(val.id)} class="card-link">
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
    </>
  );
};

export default Api;