import React from 'react'

export default function OpportunitiesTable({ opportunities }) {

    let opportunitiesJsx;
    if (typeof opportunities != "undefined" && opportunities !== null && opportunities.length > 0) {
        opportunitiesJsx = opportunities.map(item => (
            <tr>
                <td>{item.id}</td>
                <td>{item.company_name} <span>{item.company_seriies}</span></td>
                <td>{item.round}</td>
                <td>{item.round_size}</td>
                <td>{item.total_investments} </td>
                <td>{item.total_paid}</td>
                <td>{item.closing_date} </td>
                <td>
                    <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round" />
                    </label>
                </td>
            </tr>
        ))
    } else {
        opportunitiesJsx = (
            <tr>
                <td>No opportunities found</td>
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
                                <th>Company Name</th>
                                <th>Round Name</th>
                                <th>Round Size</th>
                                <th>Total Investments</th>
                                <th>Total Paid</th>
                                <th>Closing Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {opportunitiesJsx}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
