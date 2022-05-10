import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import { JSON_API } from '../../utils/Constants';
import { Helmet } from "react-helmet";
import OpportunitiesTable from '../../components/Opportunities';
import Companies from '../../components/Opportunities/Companies';
import CreateDeal from '../../components/Opportunities/CreateDeal';

export default function Opportunities() {
    const [isLoading, setisLoading] = useState(true);
    const [opportunitiesData, setOpportunitiesData] = useState([]);

    const getOpportunitiesData = async () => {
        axios.get(`${JSON_API}/opportunities_data`)
            .then(function (response) {
                setOpportunitiesData(response.data)
                setisLoading(false)
            })
            .catch(function (error) {
                // handle error
                setisLoading(true)
                console.log(error);
            })
    };

    useEffect(() => {
        getOpportunitiesData();
    }, [])

  

    return (
        <>
            <Helmet>
                <title>Opportunities |Founder</title>
                <meta name="description" content="Opportunities" />
            </Helmet>

            <Layout
                pageHeading={'Opportunities'}
            />

            <div className="main">
                <section className="topsec">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 pr-2">

                                <OpportunitiesTable 
                                   isLoading ={isLoading}
                                    opportunities={opportunitiesData}
                                 />

                            </div>
                            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pl-2">

                                <CreateDeal />

                                <Companies />

                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
