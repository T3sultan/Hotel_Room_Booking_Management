import React, { useState } from "react";
import { useEffect } from "react";
import useFireBase from "../../hooks/useFirebase";


const MyOrders = () => {
    const {user} = useFireBase();
    const [orders,setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user?.email}`)
          .then((res) => res.json())
          .then((data) => setOrders(data));
      }, [user.email]);



    return (
        <div>
            <h2>My Orders :{orders.length}</h2>
            <p>email{orders?.email}</p>
        </div>
    );
};

export default MyOrders;