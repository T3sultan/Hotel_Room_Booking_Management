import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const MangeAllOrders = () => {
    const { serviceId } = useParams()
    const [services, setServices] = useState([]);

    useEffect(() => {
        //const url = ``;
        fetch('https://creepy-web-29346.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));

    }, []);
    const handleDelete = id => {
        //const url = ;
        fetch(`https://creepy-web-29346.herokuapp.com/services/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('successfully deleted')
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining);
                }
            })
    }

    return (
    

        <div className="container">
            <h1>Mange All Orders {services?.length}</h1>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>Title</th>
                            <th>Email</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Action</th>




                        </tr>
                    </thead>
                    {services?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{pd?.name}</td>
                                <td>{pd?.title}</td>
                                <td>{pd?.email}</td>
                                <td>{pd?.description.slice(0, 20)}</td>
                                <td>{pd?.price}TK</td>

                                <button
                                    onClick={() => handleDelete(pd._id)}
                                    className="btn bg-danger p-2"
                                >
                                    Delete
                                </button>
                                <Link to={`/services/update/${pd._id}`}> <button className="btn bg-warning">update</button> </Link>
                            </tr>
                        </tbody>
                    ))}
                </Table>

            </div>

        </div>
    );
};

export default MangeAllOrders;