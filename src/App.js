import React, { useEffect, useState } from 'react';


const App = () => {

    const[data,setData]= useState([])
    const getCovidData = async () => {
        const res = fetch('https://data.covid19india.org/data.json');
        const actualData = await (await res).json();
        console.log(actualData.statewise);
        setData(actualData.statewise)
    }
    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <div className="container-fluid mt-5">
                <div className='main-heading'>
                    <h1 className='mb-5 text-center'>
                        <span className='font-weight-bold'> BANGLADESH</span>
                        COVID-19 Report Dashboard</h1>
                </div>
                <div className='table-responsive'>
                    <table className='table table-hover'>
                        <thead className='thead-dark'>
                            <tr >
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Death</th>
                                <th>Active</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((curEle,ind)=>{
                                    return(
                                       <tr key={ind}>
                                <td>{curEle.state}</td>
                                <td>{curEle.confirmed}</td>
                                <td>{curEle.recovered}</td>
                                <td>{curEle.deaths}</td>
                                <td>{curEle.active}</td>
                                <td>{curEle.lastupdatedtime}</td>
                            </tr> 
                                    )
                                })
                            }
                            
                        </tbody>
                    </table>

                </div>

            </div>

        </>
    );
};

export default App;