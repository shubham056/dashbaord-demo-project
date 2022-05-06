import React from 'react';

export default function Orders({ orders }) {


  let ordersJsx;
  if (typeof orders != "undefined" && orders !== null && orders.length > 0) {
    ordersJsx = orders.map(item => (
      <tr>
        <td>1</td>
        <td>{item.name}</td>
        <td>{item.amount}</td>
        <td>{item.round}</td>
        <td><img src={(item.status === "1") ? "assets/images/active.png" : "assets/images/pendding.png"} alt="img" /> Pending</td>
      </tr>
    ))
  } else {
    ordersJsx = (
      <tr>
        <td>No investors found</td>
      </tr>
    )
  }

  return (
    <div className="card mt-2">
      <div className="card-body tablearea2">
        <h4>Orders</h4>
        <a href="/" className="view_">See all</a>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Round</th>
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
