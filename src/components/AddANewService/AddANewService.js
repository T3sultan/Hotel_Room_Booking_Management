import React from 'react';
import useFireBase from '../../hooks/useFirebase';
import './AddANewService.css'
import axios from 'axios';
import { useForm } from "react-hook-form";


const AddANewService = () => {
    const { user } = useFireBase()
    const { reset, register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = data => {
        console.log(data);
        data.email = user?.email;
        axios.post('https://creepy-web-29346.herokuapp.com/services', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('successfully added');
                    reset();
                }
            })

    }




    return (
        <div>
            <h1 className="mt-5 text-center titleSty1">Please Add New Service</h1>
            <div className="login-box w-50 m-auto mt-2 bgColor">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("title")}
                                placeholder="Title"
                                className="p-2 m-2 w-100 "
                            />
                            <br />
                            <input
                                {...register("name")}
                                placeholder="Name"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("email")}
                                placeholder="Email"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("address")}
                                placeholder="Address"
                                className="p-2 m-2 w-100"

                            />
                            <br />
                         
                            <input
                                {...register("city")}
                                placeholder="city"
                                className="p-2 m-2 w-100"

                            />
                            <br />
                            <input
                                {...register("price")}
                                placeholder="price"
                                className="p-2 m-2 w-100"
                                type="number"
                            />
                            <br />
                            <input
                                {...register("date")}
                                placeholder="Name"
                                type="date"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("description")}
                                placeholder="Description"
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("image", { required: true })}
                                placeholder="Image Link"
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                           
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Add" className="btn btn-info w-100 btnStyle1" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddANewService;