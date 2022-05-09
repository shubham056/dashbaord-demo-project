import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import TopBarSection from '../../components/TopBarSection';
import Content from '../../components/Content';
import { JSON_API } from '../../utils/Constants';


export default function Dashboard() {

    const [dashboardStats, setDashboardStats] = useState([]);
    const [companyInfo, setCompanyInfo] = useState([]);
    const [roundInfo, setRoundInfo] = useState([]);
    const [allocationInfo, setAllocationInfo] = useState([]);
    const [investors, setInvestors] = useState([]);
    const [orders, setOrders] = useState([]);

    const getDashboardStats = async () => {

        axios.get(`${JSON_API}/dashboard_stats`)
            .then(function (response) {
                setDashboardStats(response.data[0])
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    const getCompanyInfo = async () => {
        axios.get(`${JSON_API}/company_info`)
            .then(function (response) {
                setCompanyInfo(response.data[0])
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    };

    const getRoundInfo = async () => {
        axios.get(`${JSON_API}/round_info`)
            .then(function (response) {
                setRoundInfo(response.data[0])
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    };

    const getAllocationInfo = async () => {
        axios.get(`${JSON_API}/allocation_info`)
            .then(function (response) {
                setAllocationInfo(response.data[0])
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    };

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

    const getOrdersData = async () => {
        axios.get(`${JSON_API}/orders`)
            .then(function (response) {

                setOrders(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    };


    useEffect(() => {
        getDashboardStats();
        getCompanyInfo();
        getRoundInfo();
        getAllocationInfo();
        getInvestorsData();
        getOrdersData();
    }, [])

    return (
        <>
            <Layout
                pageHeading={'Dashboard'}
            />

            <div className='main'>

                <TopBarSection
                    dashboardStats={dashboardStats}
                />

                <Content
                    companyInfo={companyInfo}
                    roundInfo={roundInfo}
                    allocationInfo={allocationInfo}
                    investors={investors}
                    orders={orders}
                />

            </div>

        </>
    )
}
