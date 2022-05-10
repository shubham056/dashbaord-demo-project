import React from 'react';

export default function Investors({ investors }) {

  let investorsJsx;
  if (typeof investors != "undefined" && investors !== null && investors.length > 0) {
    investorsJsx = investors.map(item => (
      <tr>
        <td>{item.id} <input type="checkbox" name /></td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td><img src={( item.status === "true" ) ? "assets/images/active.png" : "assets/images/pendding.png"} alt="img" /> Pending</td>
      </tr>
    ))
  } else {
    investorsJsx = (
      <tr>
      <td>No investors found</td>
    </tr>
    )
  }

  return (
    <div className="card">
                  <div className="card-body">
                    <div className="table-responsive tablearea2">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {investorsJsx}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
  )
}
