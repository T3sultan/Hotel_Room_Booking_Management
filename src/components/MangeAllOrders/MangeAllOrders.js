import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const MangeAllOrders = () => {
    const { serviceId } = useParams()
    const [services, setServices] = useState([]);

    useEffect(() => {
        //const url = ``;
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));

    }, []);
    // const handleDelete = id => {
    //     //const url = ;
    //     fetch(`http://localhost:5000/services/${id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.deletedCount > 0) {
    //                 alert('successfully deleted')
    //                 const remaining = services.filter(service => service._id !== id)
    //                 setServices(remaining);
    //             }
    //         })
    // }

    return (
        // <div>
        //     <h2>Mange All Orders {services.length}</h2>
        //     {
        //         services.map(service => <div
        //             key={service._id}
        //         >

        //             <h3>{service.name}</h3>
        //             <button onClick={() => handleDelete(service._id)}>Delete</button>
        //         </div>)
        //     }
        // </div>

        <div className="container">
            <h1>Events {services?.length}</h1>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Event Title</th>
                            <th>Event description</th>
                            <th>Image Link</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {services?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{pd.title}</td>
                                <td>{pd.description}</td>
                                <td>{pd.image}</td>
                                <button
                                    // onClick={() => handleDelete(pd._id)}
                                    className="btn bg-danger p-2"
                                >
                                    Delete
                                </button>
                            </tr>
                        </tbody>
                    ))}
                </Table>

            </div>

        </div>
    );
};

export default MangeAllOrders;