import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InvestorsTable from '../../components/Investors';
import AddInvestors from '../../components/Investors/AddInvestors';
import InviteInvestors from '../../components/Investors/InviteInvestors';
import Layout from '../../components/Layout';
import { JSON_API } from '../../utils/Constants';
import { Helmet } from "react-helmet";
import OrdersTable from '../../components/Orders/OrdersTable';

export default function Orders() {

  const [ordersData, setOrdersData] = useState([]);

  const getOrdersData = async () => {
    axios.get(`${JSON_API}/orders`)
      .then(function (response) {
        setOrdersData(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  };

  useEffect(() => {
    getOrdersData();
  }, [ordersData])


  return (
    <>
      <Helmet>
        <title>Investors |Founder</title>
        <meta name="description" content="Investors" />
      </Helmet>
      
      <Layout
        pageHeading={"Orders"}
      />

      <div className="main">
        <section className="topsec">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 pr-2">

                <OrdersTable
                  orders={ordersData}
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
