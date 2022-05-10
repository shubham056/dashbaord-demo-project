import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function OpportunitiesTable({ isLoading, opportunities }) {
    console.log(isLoading)
    console.log("opportunities", opportunities)
    let opportunitiesJsx;
    if (isLoading) {
        opportunitiesJsx = opportunities.map(item => (
            <tr>
                <td>{ isLoading ? <Skeleton /> : item.id}</td>
                <td>{ isLoading ? <Skeleton /> : <> {item.company_name} <span>{item.company_seriies}</span> </>}  </td>
                <td>{ isLoading ? <Skeleton /> : item.round}</td>
                <td>{ isLoading ? <Skeleton /> : item.round_size}</td>
                <td>{ isLoading ? <Skeleton /> : item.total_investments} </td>
                <td>{ isLoading ? <Skeleton /> : item.total_paid}</td>
                <td>{ isLoading ? <Skeleton /> : item.closing_date} </td>
                <td>
                    {
                        isLoading ? <Skeleton /> : <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round" />
                    </label>
                    }
                    
                </td>
            </tr>
        ))
        
    } else {
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
