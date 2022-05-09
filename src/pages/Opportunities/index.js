import React from 'react';
import Layout from '../../components/Layout';
import { Helmet } from "react-helmet";

export default function Opportunities() {
    return (
        <>
            <Helmet>
                <title>Opportunities |Founder</title>
                <meta name="description" content="Opportunities" />
            </Helmet>

            <Layout
                pageHeading={'Opportunities'}
            />
            {/* Main Content Area */}
            <div className="main">
                <section className="topsec">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 pr-2">
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
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Monsoon Creditech <span>PINTECH SEED</span></td>
                                                        <td>Series| <span>PRIMARY</span></td>
                                                        <td>$300K</td>
                                                        <td>45 </td>
                                                        <td>12</td>
                                                        <td>04/02/2022 </td>
                                                        <td>
                                                            <label className="switch">
                                                                <input type="checkbox" defaultChecked />
                                                                <span className="slider round" />
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>My Jar App <span>PINTECH PRE-SEED</span></td>
                                                        <td>Series| <span>SECONDARY</span></td>
                                                        <td>$100K</td>
                                                        <td>36 </td>
                                                        <td>23</td>
                                                        <td>01/12/2022 </td>
                                                        <td>
                                                            <label className="switch">
                                                                <input type="checkbox" defaultChecked />
                                                                <span className="slider round" />
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Monsoon Creditech <span>PINTECH SERIES-A</span></td>
                                                        <td>Series| <span>PRIMARY</span></td>
                                                        <td>$1M</td>
                                                        <td>99 </td>
                                                        <td>56</td>
                                                        <td>09/24/2022 </td>
                                                        <td>
                                                            <label className="switch">
                                                                <input type="checkbox" defaultChecked />
                                                                <span className="slider round" />
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Monsoon Creditech <span>PINTECH SERIES-B</span></td>
                                                        <td>Series| <span>SECONDARY</span></td>
                                                        <td>$450K</td>
                                                        <td>45 </td>
                                                        <td>12</td>
                                                        <td>04/02/2022 </td>
                                                        <td>
                                                            <label className="switch">
                                                                <input type="checkbox" defaultChecked />
                                                                <span className="slider round" />
                                                            </label>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pl-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Add an Investor</h3>
                                        <form>
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input type="text" name="Iname" className="form-control" placeholder="Investor Name" />
                                            </div>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="email" name="Iname" className="form-control" placeholder="Email Address" />
                                            </div>
                                            <div className="form-group text-right">
                                                <button type="button" className="btn btn-primary">+ Add</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <h3>Invite Investors</h3>
                                        <form>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="text" name="sname" className="form-control" placeholder="Search Name Here" />
                                                <input type="text" name="Iname" className="form-control" placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <label>Select Round</label>
                                                <select className="form-control">
                                                    <option>Monsoon Creditech</option>
                                                    <option>Monsoon Creditech</option>
                                                    <option>Monsoon Creditech</option>
                                                </select>
                                                <select className="form-control">
                                                    <option>Series I</option>
                                                    <option>Series I</option>
                                                    <option>Series I</option>
                                                </select>
                                            </div>
                                            <div className="form-group text-right">
                                                <button type="button" className="btn btn-primary">+ Add</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </>
    )
}
