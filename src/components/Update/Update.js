import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { set, useForm } from "react-hook-form";
import './Update.css'

const Update = () => {
    const [update, setUpdate] = useState({});
    const { reset, register, handleSubmit, formState: { errors }, } = useForm();


    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUpdate(data));

    }, []);
    const handleTitle = (e) => {
        // console.log(e.target.value)
        const updateTitle = e.target.value;
        const updatedTitle = {
            title: updateTitle,
            name: update.name,
            email: update.email,
            price: update.price,
            address: update.address,
            city: update.city,
            description: update.description,
            image: update.image
        }
        setUpdate(updatedTitle)
    }
    const handleName = e => {
        const updateName = e.target.value;
        const updatedName = {
            name: updateName,
            title: update.title,
            email: update.email,
            price: update.price,
            address: update.address,
            city: update.city,
            description: update.description,
            image: update.image
        }
        setUpdate(updatedName)
    }
    const handleEmail = e => {
        const updateEmail = e.target.value;
        const updatedEmail = {
            name: update.name,
            title: update.title,
            email: updateEmail,
            price: update.price,
            address: update.address,
            city: update.city,
            description: update.description,
            image: update.image
        }
        setUpdate(updatedEmail)

    }
    const handleAddress = e => {
        const updateAddress = e.target.value;
        const updatedAddress = {
            name: update.name,
            title: update.title,
            email: update.email,
            price: update.price,
            address: updateAddress,
            city: update.city,
            description: update.description,
            image: update.image
        }
        setUpdate(updatedAddress)

    }
    const handleCity = e => {
        const updateCity = e.target.value;
        const updatedCity = {
            name: update.name,
            title: update.title,
            email: update.email,
            price: update.price,
            address: update.address,
            city: updateCity,
            description: update.description,
            image: update.image
        }
        setUpdate(updatedCity)

    }
    const handlePrice = e => {
        const updatePrice = e.target.value;
        const updatedPrice = {
            name: update.name,
            title: update.title,
            email: update.email,
            price: updatePrice,
            address: update.address,
            city: update.city,
            description: update.description,
            image: update.image
        }
        setUpdate(updatedPrice)

    }
    const handleDate = e => {
        const updateDate = e.target.value;
        const updatedDate = {
            name: update.name,
            title: update.title,
            email: update.email,
            price: update.price,
            address: update.address,
            city: update.city,
            description: update.description,
            image: update.image,
            date: updateDate
        }
        setUpdate(updatedDate)

    }
    const handleDes = e => {
        const updateDes = e.target.value;
        const updatedDes = {
            name: update.name,
            title: update.title,
            email: update.email,
            price: update.price,
            address: update.address,
            city: update.city,
            description: updateDes,
            image: update.image,
            date: update.date
        }
        setUpdate(updatedDes)

    }

    const handleImage = e => {
        const updateImg = e.target.value;
        const updatedImg = {
            name: update.name,
            title: update.title,
            email: update.email,
            price: update.price,
            address: update.address,
            city: update.city,
            description: update.description,
            image: updateImg,
            date: update.date
        }
        setUpdate(updatedImg)

    }


    const handleUpdateOrder = (e) => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Successfully Updated')
                    setUpdate({});
                }
            })

        e.preventDefault();
    }


    return (
        <div>
            {/* <h3>Update Name:{update.name}</h3>
            <p>Email:{update.email}</p> */}
            <p><small>{id}</small></p>
            <h2>Order Update</h2>
            <form onSubmit={handleUpdateOrder}>
                <input
                    {...register("title")}
                    placeholder="Title"
                    className="p-2 m-2 w-100 "
                    value={update?.title || ''}
                    onChange={handleTitle}
                />
                <br />
                <input
                    {...register("name")}
                    placeholder="Name"
                    className="p-2 m-2 w-100"
                    value={update?.name || ''}
                    onChange={handleName}
                />
                <br />
                <input
                    {...register("email")}
                    placeholder="Email"
                    className="p-2 m-2 w-100"
                    value={update?.email || ''}
                    onChange={handleEmail}
                />
                <br />
                <input
                    {...register("address")}
                    placeholder="Address"
                    className="p-2 m-2 w-100"
                    value={update?.address || ''}
                    onChange={handleAddress}
                />
                <br />

                <input
                    {...register("city")}
                    placeholder="city"
                    className="p-2 m-2 w-100"
                    value={update?.city || ''}
                    onChange={handleCity}

                />
                <br />
                <input
                    {...register("price")}
                    placeholder="price"
                    className="p-2 m-2 w-100"
                    type="number"
                    value={update?.price || ''}
                    onChange={handlePrice}
                />
                <br />
                <input
                    {...register("date")}
                    placeholder="Name"
                    type="date"
                    className="p-2 m-2 w-100"
                    value={update?.date || ''}
                    onChange={handleDate}
                />
                <br />
                <input
                    {...register("description")}
                    placeholder="Description"
                    className="p-2 m-2"
                    className="p-2 m-2 w-100"
                    value={update?.description || ''}
                    onChange={handleDes}
                />
                <br />

                <input
                    {...register("image", { required: true })}
                    placeholder="Image Link"
                    className="p-2 m-2"
                    className="p-2 m-2 w-100"
                    value={update?.image || ''}
                    onChange={handleImage}
                />
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value="Update" className="btn btn-info w-100 btnStyle1" />
            </form>

        </div>
    );
};

export default Update;