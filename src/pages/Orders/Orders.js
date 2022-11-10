import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/Authprovider/AuthProvider';
import OrderRow from './OrderRow';
import './order.css'

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])


    const handleStatusUpdate = id => {}
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if(proceed){
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = orders.filter(odr => odr._id !== id);
                    setOrders(remaining);
                }
            })
        }
    }

    return (
        <div>
              <h2 className="text-5xl">You have {orders.length} Orders</h2>

              <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr >
                        <th > delete</th>
                            <th>img & customer Name</th>
                            <th>Service Name</th>
                            <th>Review Details</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></OrderRow>)
                        }
                    </tbody>
                    </table>
                    </div>
        </div>
    );
};

export default Orders;