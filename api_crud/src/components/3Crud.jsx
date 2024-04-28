import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const Crud = () => {
    const name = useRef();
    const price = useRef();

    const [Data, setData] = useState([]);
    const [view, setView] = useState({});

    // Get all data
    const addProduct = async () => {
        let product = {
            name: name.current.value,
            price: price.current.value,
        };
        let result = await axios.post('http://localhost:3001/product', product);
        setData([...Data, result.data]);
    };

    // Get api
    const getProducts = async () => {
        let res = await axios.get('http://localhost:3001/product');
        setData(res.data);
    };

    // Delete api
    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:3001/product/${id}`);
        setData(Data.filter((val) => val.id !== id));
    };

    // Update api (view part)
    const viewProduct = (product) => {
        setView(product);
    };

    // Final operation of update
    const updateProduct = async () => {
        let res = await axios.put(`http://localhost:3001/product/${view.id}`, view.product);
        setData(Data.map((val) => (val.id === res.data.id ? res.data : val)));
        
    };

    // Handle view
    const handleView = (e) => {
        setView({ ...view, product: { ...view.product, [e.target.name]: e.target.value } });
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <input type="text" name='name' placeholder='Name' ref={name} /><br />
            <input type="number" name='price' placeholder='price' ref={price} /><br />
            <button onClick={addProduct}>Create</button><br />
            <div className='row'>
                {Data.map((val) => (
                    <div className="card col-4" style={{ width: "18rem" }} key={val.id}>
                        <div className="card-body">
                            <h5 className="card-title">{val.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{val.price}</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className='btn btn-danger mr-3' onClick={() => deleteProduct(val.id)}>Delete</button>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => viewProduct(val)}>Update</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal view */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="input-group p-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> Product Name</span>
                            </div>
                            <input type="text" className="form-control" value={view.product && view.product.name} name="name" onChange={handleView} />
                        </div>
                        <div className="input-group mb-3 p-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Price</span>
                            </div>
                            <input type="number" className="form-control" value={view.product && view.product.price} name="price" onChange={handleView} />
                        </div>
                        <div className="modal-footer">
                            <button type="reset" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="sumbit" className="btn btn-primary" onClick={updateProduct}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Crud;







// ------------------------------
















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