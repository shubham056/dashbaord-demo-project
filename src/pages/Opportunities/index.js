import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import { JSON_API } from '../../utils/Constants';
import { Helmet } from "react-helmet";
import OpportunitiesTable from '../../components/Opportunities';

export default function Opportunities() {

    const [opportunitiesData, setOpportunitiesData] = useState([]);

    const getOpportunitiesData = async () => {
        axios.get(`${JSON_API}/opportunities_data`)
            .then(function (response) {
                setOpportunitiesData(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    };

    useEffect(() => {
        getOpportunitiesData();
    }, [opportunitiesData])

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
                                <OpportunitiesTable opportunities={opportunitiesData} />
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
