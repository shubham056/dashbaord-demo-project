import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InvestorsTable from '../../components/Investors';
import AddInvestors from '../../components/Investors/AddInvestors';
import InviteInvestors from '../../components/Investors/InviteInvestors';
import Layout from '../../components/Layout';
import { JSON_API } from '../../utils/Constants';
import { Helmet } from "react-helmet";

export default function Investors() {

  const [investors, setInvestors] = useState([]);

  const getInvestorsData = async () => {
    axios.get(`${JSON_API}/investors`)
      .then(function (response) {

        setInvestors(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  };

  useEffect(() => {
    getInvestorsData();
  }, [investors])


  return (
    <>
      <Helmet>
        <title>Investors |Founder</title>
        <meta name="description" content="Investors" />
      </Helmet>
      
      <Layout
        pageHeading={"Investors"}
      />

      <div className="main">
        <section className="topsec">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 pr-2">

                <InvestorsTable
                  investors={investors}
                />

              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pl-2">

                <AddInvestors />

                <InviteInvestors />

              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}
