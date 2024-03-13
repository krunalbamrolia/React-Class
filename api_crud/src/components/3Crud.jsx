import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const Crud = () => {
    const name = useRef()
    const price = useRef()

    
    const [Data, setdata] = useState([])

    // Get all data
    const addpro = async ()=>{
        let product ={
            name:name.current.value,
            price:price.current.value,
        }
        //post api
        let result = await axios.post('http://localhost:3001/product',product);
        // alert(result.data)
        setdata([...Data,result.data]);
    }

    //get api
    const getpro = async ()=>{
        let res = await axios.get('http://localhost:3001/product');
        setdata(res.data);
    }

    useEffect(() => {
      getpro();
    }, []);
    


  return (
    <>
    <input type="text" name='name' placeholder='Name' ref={name} /><br/>
    <input type="number" name='price' placeholder='price' ref={price} /><br/>
    <button onClick={addpro}>Create</button><br />
    {
        Data.map((val)=>{
            return (
            <div>
                <div><span>{val.name}</span>
                <span>{val.price}</span></div><br />
            </div>
            )
        })
    }
    </>
  )
}

export default Crud
























// import axios from 'axios';
// import React, { useEffect, useRef, useState } from 'react'

// const Crud = () => {
//     const name = useRef();
//     const price = useRef();

//     const [Data, setData] = useState([])

//     //data add 
//     const dataadd =async () => {
//         let product={
//             name:name.current.value,
//             price:price.current.value
//         };
//         // data add api
//         let result = await axios.post('http://localhost:3001/product',product); 
//         setData([...Data, result.data]);
//     }

//     // data get api
//     let getproduct = async ()=> {
//         let res = await axios.get('http://localhost:3001/product');
//         setData(res.data)  
//     }

//     useEffect(() => {
//         getproduct();
//     }, []);

//   return (
//     <>
//     <h1>Add Product</h1>
//     <input type="text" name='name' placeholder='name' ref={name}/>
//     <input type="number" name='price' placeholder='price' ref={price} />
//     <button onClick={dataadd}>Submit</button>
//     <div className='row'>
//             {
//                 Data.map((val) => {
//                     return (
//                         <div class="card col-3" style={{ width: "18rem" }}>
//                             <h1 class="card-title">{val.name}</h1>
//                                 <h6 class="card-subtitle mb-2 text-muted">{val.price}</h6>
//                         </div >
//                     )
//                 })
//             }
//     </div>
//     </>
// )
// }
// export default Crud