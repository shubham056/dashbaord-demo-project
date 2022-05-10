import React from 'react'

export default function OrdersTable({ orders }) {

    let ordersJsx;
    if (typeof orders != "undefined" && orders !== null && orders.length > 0) {
        ordersJsx = orders.map(item => (
            <tr>
                <td>{item.id} <input type="checkbox" name="" /></td>
                <td><input type="text" class="comname" /> </td>
                <td>{item.round}</td>
                <td>{item.name}</td>
                <td>mark@email.com</td>
                <td>+1 3747494046</td>
                <td><img src={(item.status === "1") ? "assets/images/active.png" : "assets/images/pendding.png"} alt="img" /> {(item.status === "1") ? "Active" : "Pending"}</td>
            </tr>
        ))
    } else {
        ordersJsx = (
            <tr>
                <td>No orders found</td>
            </tr>
        )
    }

    return (
        <div class="card">
            <div class="card-body">
                <div class="table-responsive tablearea2">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Company</th>
                                <th>Round</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ordersJsx}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
